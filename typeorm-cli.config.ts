import { createAuthor1658015205318 } from "src/migrations/1658015205318-create-author";
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
    createAuthor1658015205318,
  ]
});
