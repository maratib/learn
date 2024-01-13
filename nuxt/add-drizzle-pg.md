# Adding Drizzle
[Nuxt3 Source](https://github.com/maratib/nuxt-drizzle-pg-starter)

```bash
# Add drizzle with postgres driver
yarn add drizzle-orm drizzle-zod pg bcryptjs oslo dotenv

# Add drizzle tools
yarn add -D drizzle-kit @types/pg @faker-js/faker tsx @types/bcryptjs

# .env example
# For vercel-postgres 
DB_URL="postgres://user:password@host:5432/dbName?sslmode=require"
# For Local-postgres
DB_URL="postgres://user:password@host:5432/dbName"

```
### Global config
```javascript
// Add drizzle.config.ts

import { defineConfig } from 'drizzle-kit'

export default defineConfig({

  schema: "./db/schema.ts",
  out: "./db/drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DB_URL as string,
  },
  verbose: true,
  strict: true,

})
```
### Schema
```javascript
// Add ~/db/schema.ts 

import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { uuid, timestamp, pgTable, uniqueIndex, varchar, boolean, pgEnum } from "drizzle-orm/pg-core";

import { tableNames } from "./tables";

// declaring enum in database
export const userRoles = pgEnum('roles', ['USER', 'ADMIN']);

export const UsersTable = pgTable(tableNames('users'),
  {
    id: uuid('id').primaryKey().defaultRandom(),
    user: varchar('user').notNull(),
    email: varchar('email').notNull(),
    password: varchar('password').notNull(),

    name: varchar('name'),
    phone: varchar('phone'),
    image: varchar('image'),
    roles: userRoles('roles').default('USER'),
    isActive: boolean('active').default(true),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx_email: uniqueIndex('unique_email').on(users.email),
      uniqueIdx_user: uniqueIndex('unique_user').on(users.user),
    }
  }
)

export type User = InferSelectModel<typeof UsersTable>
export type NewUser = InferInsertModel<typeof UsersTable>

```
### Migrate

```javascript
// Add ~/db/migrate.ts

import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "~/db";

async function main() {
  console.log("migration started...");
  await migrate(db, { migrationsFolder: "./db/drizzle" });
  console.log("migration ended...");
  process.exit(0);
}

main().catch((err) => {
  console.log(err);
  process.exit(0);
});

```
### Connection Pool
```javascript
// Add ~/db/index.ts

import 'dotenv/config'
import pg from 'pg';
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

if (!("DB_URL" in process.env))
  throw new Error("DB_URL not found on .env, connection failed");

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DB_URL,
  max: 10
});
export const db = drizzle(pool, { schema: schema });

```
### Seed
```javascript
// Add ~/db/seed.ts

import { faker } from "@faker-js/faker";
import { db } from "~/db";
import { hash } from "~/server/utils/encrypt";
import { UsersTable, type NewUser } from './schema';

const main = async () => {
  console.log('Seeding starts ...');
  const data: NewUser[] = [];

  data.push({
    user: 'admin',
    email: 'admin@mail.com',
    password: await hash('Admin322'),
    name: 'Admin',
    roles: 'ADMIN'
  },
    {
      user: 'user',
      email: 'user@mail.com',
      password: await hash('User322'),
      name: 'User',
    }
  )

  // for (let index = 0; index < 4; index++) {
  //   const name = faker.internet.userName();
  //   data.push({
  //     user: name,
  //     email: faker.internet.email(),
  //     password: faker.internet.password(),
  //     name: name,
  //   })
  // }

  // console.log(data);
  try {
    await db.insert(UsersTable).values(data)
  } catch (error: any) {
    console.log(error.message);
  }
  console.log('Seeding done ...');
}

main();
```

### Encryption utility for password hashing and verification

```javascript
// Add ~/server/utils/encrypt.ts

import { Bcrypt } from "oslo/password";

export async function hash(plainPassword: string) {
  return await new Bcrypt().hash(plainPassword);
}

export async function verify(hash: string, plainPassword: string) {
  return await new Bcrypt().verify(hash, plainPassword);
}

```
### Tables naming convention maintainer 
```javascript
// Add ~/db/tables.ts

const tbl_prefix = 'cl_';
export function tableNames(tableName: string) {
  return tbl_prefix + tableName;
};
```
### Model 
```javascript
// Add ~/server/model/user.ts

import { eq } from "drizzle-orm";
import { db } from "~/db";
import { NewUser, UsersTable } from "~/db/schema";
import { BAD_REQUEST, RESOURCE_NOT_FOUND } from "~/server/utils/exceptions";
import { hash } from "~/server/utils/encrypt";

export class User {


  constructor(private event: any) { }


  async all() {
    try {
      const usersResp = await db.select().from(UsersTable);

      return { users: usersResp };
    } catch (e: any) {
      return BAD_REQUEST(this.event);
    }
  }

  async findById(id: string) {
    try {
      const usersResp = await db
        .select()
        .from(UsersTable)
        .where(eq(UsersTable.id, id));
      return usersResp?.[0];
    } catch (e: any) {
      return RESOURCE_NOT_FOUND(this.event);
    }
  }

  async findByUser(user: string) {
    try {
      const usersResp = await db
        .select()
        .from(UsersTable)
        .where(eq(UsersTable.user, user));
      return { user: usersResp };
    } catch (e: any) {
      return RESOURCE_NOT_FOUND(this.event);
    }
  }

  async findByEmail(email: string) {
    try {
      const usersResp = await db
        .select()
        .from(UsersTable)
        .where(eq(UsersTable.email, email));
      return usersResp?.[0];
    } catch (e: any) {
      return RESOURCE_NOT_FOUND(this.event);
    }
  }

  async create(user: NewUser) {

    try {
      // Hash password
      const hashedPassword = await hash(user.password);
      const newUser: NewUser = { ...user, password: hashedPassword }
      const result = await db.insert(UsersTable).values(newUser).returning();

      return {
        newUser: result
      }

    } catch (e: any) {
      return BAD_REQUEST(this.event)
    }
  } // createUser ends
}
```
### Exceptions 

```javascript
// Add ~/server/utils/exceptions.ts

export const sendErrorResponse = (event: any, statusCode: number, message: string) => {
  sendError(event, createError({
    statusCode: statusCode,
    statusMessage: message,
  }));
}

export const BAD_REQUEST = (event: any) => {
  sendError(event, createError({
    statusCode: 400,
    statusMessage: 'Bad request',
  }));
}

export const RESOURCE_NOT_FOUND = (event: any) => {
  sendError(event, createError({
    statusCode: 404,
    statusMessage: 'Resource not found',
  }));
}

export const UNAUTHORIZED = (event: any) => {
  sendError(event, createError({
    statusCode: 403,
    statusMessage: 'Unauthorized',
  }));
}

export const INVALID_CREDENTIALS = (event: any) => {
  sendError(event, createError({
    statusCode: 401,
    statusMessage: 'Invalid Credentials',
  }));
}


```
### Endpoints
```javascript 
// Add nuxt endpoint ./server/api/users.ts
// endpoint GET : http://localhost:3001/api/users
// endpoint POST : http://localhost:3001/api/users

import { User } from "~/server/model/user";

export default defineEventHandler(async (event) => {

  const user = new User(event);

  if (event.node.req.method === 'GET') { // GET
    return await user.all();
  }

  if (event.node.req.method === 'POST') { // POST
    try {

      const body = await readBody(event)
      const newUser = user.create(body)

      event.node.res.statusCode = 201
      return newUser;

    } catch (e: any) { return BAD_REQUEST(event) }
  }

})

```



```javascript
// Add new scripts to package scripts
...
"schema": "drizzle-kit generate:pg",
"push": "tsx db/migrate.ts",
"seed": "tsx db/seed.ts",
"studio": "drizzle-kit studio"
```

```bash
# To generate schema
yarn schema
# To push into db
yarn push
# To seed data
yarn seed
# To run drizzle studio
yarn studio
```