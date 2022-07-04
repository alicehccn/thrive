import { CreateTable1656918134563 } from "src/migrations/1656918134563-CreateTable";
import { CreateTable1656921366179 } from "src/migrations/1656921366179-CreateTable";
import { DataSource } from "typeorm";

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'alicehuang',
  password: 'postgres',
  database: 'postgres',
  entities: [],
  migrations: [
    CreateTable1656918134563,
    CreateTable1656921366179,
  ],
});
