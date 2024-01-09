# Add Local Auth to nuxt 3 server side
[Nuxt3 Source](https://github.com/maratib/nuxt-drizzle-pg-starter)

### Login endpoint
```javascript
// Add ~server/routes/login.post.ts
// END-POINT-POST: http://localhost:3001/auth/login

import { User } from "~/server/model/user";
import { verify } from "~/server/utils/encrypt";

export default defineEventHandler(async (event) => {

  const body = await readBody<{ email: string; password: string; rememberMe: boolean }>(event);

  const { email, password, rememberMe } = body;

  const user = new User()

  // console.log(body);

  const userWithPassword = await user.findByEmail(email);
  if (!userWithPassword) {
    return createError({
      statusCode: 401,
      message: "Bad credentials1",
    });
  }

  console.log(userWithPassword);

  const verified = await verify(userWithPassword.password, password);
  if (!verified) {
    return createError({
      statusCode: 401,
      message: "Bad credentials2",
    });
  }


  const config = useRuntimeConfig();

  const session = serialize({ userId: userWithPassword.id });
  const signedSession = sign(session, config.cookieSecret);

  setCookie(event, config.cookieName, signedSession, {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    expires: rememberMe
      ? new Date(Date.now() + config.cookieRememberMeExpires)
      : new Date(Date.now() + config.cookieExpires),
  });

  const userWithoutPassword = ({
    id: userWithPassword.id,
    name: userWithPassword.name,
    roles: userWithPassword.roles
  })

  // const { password: _password, ... } = userWithPassword;

  return {
    user: userWithoutPassword
  }
})
```
### Logout endpoint
```javascript
// Add ~server/routes/logout.post.ts
// END-POINT-POST: http://localhost:3001/auth/logout

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  deleteCookie(event, config.cookieName, {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return {
    user: null,
  };
});

```
### ME endpoint
```javascript
// Add ~server/routes/me.get.ts
// END-POINT-GET: http://localhost:3001/auth/me

export default defineEventHandler(async (event) => {
  const userWithPassword = event.context.user;
  if (!userWithPassword) {
    return {
      user: null,
    };
  }
  const { password: _password, ...userWithoutPassword } = userWithPassword;
  return { user: userWithoutPassword }
});

```
### Middleware Session (Server)
```javascript
// Add ~/server/middleware/session.ts

export default defineEventHandler(async (event) => {
  const path = event?.path
  console.log("Passing through API session : ", path);
  const user = await getUserFromSession(event);
  if (user) event.context.user = user;

  if (path.startsWith('/api') && !user) {
    UNAUTHORIZED("Unauthorized")
  }
})
```
### Session Utils (Server)
```javascript
// Add ~/server/utils/session.ts

import type { H3Event } from "h3";
import { User } from "~/server/model/user";
import { deserialize, unsign } from "./cookie";

const user = new User();

export async function getUserFromSession(event: H3Event) {
  const config = useRuntimeConfig();

  const cookie = getCookie(event, config.cookieName);
  if (!cookie) return null;

  const unsignedSession = unsign(cookie, config.cookieSecret);
  if (!unsignedSession) return null;

  const session = deserialize(unsignedSession);

  return user.findById(session.userId);
}

```
### Cookie utils (Server)
```javascript
// Add ~/server/utils/cookie.ts

import { type KeyObject, createHmac, timingSafeEqual } from "node:crypto";

export type CookieSecret = string | Buffer | KeyObject;

export function serialize(obj: object) {
  const value = Buffer.from(JSON.stringify(obj), "utf-8").toString("base64");
  const length = Buffer.byteLength(value);

  if (length > 4096)
    throw createError({
      statusCode: 400,
      statusMessage: "Bad request",
      message: "Cookie too large",
    });

  return value;
}

export function deserialize(value: string) {
  return JSON.parse(Buffer.from(value, "base64").toString("utf-8"));
}

export function sign(value: string, secret: CookieSecret) {
  const signature = createHmac("sha256", secret).update(value).digest("base64").replace(/=+$/, "");

  return `${value}.${signature}`;
}

export function unsign(input: string, secret: CookieSecret) {
  const value = input.slice(0, input.lastIndexOf("."));
  const expectedInput = sign(value, secret);
  const expectedBuffer = Buffer.from(expectedInput);
  const inputBuffer = Buffer.from(input);

  if (!(expectedBuffer.equals(inputBuffer) && timingSafeEqual(expectedBuffer, inputBuffer))) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid cookie signature",
      message: "Invalid cookie signature",
    });
  }

  return value;
}
```
### Exceptions
```javascript
// Add ~/server/utils/exceptions.ts

export const BAD_REQUEST = (e: any) => {
  throw createError({
    statusCode: 400,
    statusMessage: e.message,
  });
}

export const RESOURCE_NOT_FOUND = (e: any) => {
  throw createError({
    statusCode: 404,
    statusMessage: e.message,
  });
}

export const UNAUTHORIZED = (message: string) => {
  throw createError({
    statusCode: 401,
    statusMessage: message,
  });
}
```
