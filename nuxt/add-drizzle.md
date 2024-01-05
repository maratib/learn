Adding Drizzle

```bash
# Add drizzle with postgres driver
yarn add drizzle-orm pg

# Add drizzle tools
yarn add -D drizzle-kit @types/pg

```
```javascript
// Add drizzle.config.ts

import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DB_URL!,
  },
  verbose: true,
  strict: true,
})
```

```javascript
// Add ./db/schema.ts 

import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "user">().default("user"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
```
```javascript
// Add ./db/migrate.ts

import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 1
});

const db = drizzle(pool);

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
```javascript
// Add new scripts to package scripts
"gen": "drizzle-kit generate:pg",
"gen:push": "node -r esbuild-register db/migrate.ts"
```

```bash
# To run drizzle studio
yarn drizzle-kit studio
```