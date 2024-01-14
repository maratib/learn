# Add drizzle orm to nest.js
[NestVercel Source](https://github.com/maratib/nest-vercel)
[NestDrizzle Source](https://github.com/ashansurkar/nest-drizzle)


```bash
yarn add drizzle-orm pg @nestjs/config
```

## .env
```bash
# .env example
# For vercel-postgres 
DATABASE_URL="postgres://user:password@host:5432/dbName?sslmode=require"
# For Local-postgres
DATABASE_URL="postgres://user:password@host:5432/dbName"
```

### Add a drizzle module to setup drizzle with Postgres which will be later used to fetch users:
```bash
nest g mo drizzle
```

### Add a users REST API since we will fetch some users:
```bash
nest g res users
```

### app.module.ts
```javascript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    DrizzleModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### constants.ts
```javascript
// src/constants.ts

export const PG_CONNECTION = 'PG_CONNECTION';
```

### Drizzle module setup e.g `PG_CONNECTION` as a db connection provider
```javascript
// src/drizzle/drizzle.module.ts

import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { PG_CONNECTION } from '../constants';
import * as schema from './schema';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const connectionString = configService.get<string>('DATABASE_URL');
        const pool = new Pool({
          connectionString,
        });

        return drizzle(pool, { schema });
      },
    },
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}

```

### Tables utility
```javascript
// Add ./src/drizzle/table.ts

const tbl_prefix = 'nv_';
export function tableNames(tableName: string) {
  return tbl_prefix + tableName;
};
```

### Schema
```javascript
// src/drizzle/schema.ts

import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
import { InferInsertModel, InferSelectModel, relations } from 'drizzle-orm';
import { tableNames } from './tables';

export const users = pgTable(tableNames('users'), {
  user_id: serial('user_id').primaryKey(),
  email: text('email'),
});

export type User = InferSelectModel<typeof users>
export type NewUser = InferInsertModel<typeof users>
```

### users.service.ts
```javascript
import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from '../constants';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject(PG_CONNECTION) private conn: NodePgDatabase<typeof schema>,
  ) {}

  async findAll() {
    return await this.conn.query.users.findMany();
  }
}
```

### users.controller.ts
```javascript
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
```

### users.module.ts
```javascript
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DrizzleModule } from '../drizzle/drizzle.module';
@Module({
  controllers: [UsersController],
  imports: [DrizzleModule],
  providers: [UsersService],
})
export class UsersModule {}
```
## Drizzle additional 
```bash
yarn add -D drizzle-kit @types/pg @faker-js/faker tsx 

# Add scripts to package.json
"schema": "drizzle-kit generate:pg",
"push": "tsx db/migrate.ts",
"seed": "tsx db/seed.ts",
"studio": "drizzle-kit studio"
```

### Drizzle config for studio
```javascript 
import { defineConfig } from 'drizzle-kit'

export default defineConfig({

  schema: "./src/drizzle/schema.ts",
  out: "./db/drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,

})

// yarn drizzle-kit studio
```

### Drizzle connection for migration and seeding
```javascript
// Add ./db/db.ts

import 'dotenv/config'
import pg from 'pg';
import { drizzle } from "drizzle-orm/node-postgres";


if (!("DATABASE_URL" in process.env))
  throw new Error("DATABASE_URL not found on .env, connection failed");

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 1
});
export const db = drizzle(pool);
```

### Migrate
```javascript
// Add ./db/migrate.ts

import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./db";

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