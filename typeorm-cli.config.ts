import { createAuthor1658015205318 } from "src/migrations/1658015205318-create-author";
import { authorTimestamp1658022331591 } from "src/migrations/1658022331591-author-timestamp";
import { Author, Note } from "src/notes/entities";
import { DataSource } from "typeorm";

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'alicehuang',
  password: 'postgres',
  database: 'postgres',
  entities: [
    Note,
    Author
  ],
  migrations: [
    createAuthor1658015205318,
    authorTimestamp1658022331591,
  ]
});
