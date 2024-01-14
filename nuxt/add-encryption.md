# Add Encryption 
```bash
# Add required dependencies 
yarn add bcryptjs oslo

# Add required dev dependencies 
yarn add -D @types/bcryptjs
```

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
