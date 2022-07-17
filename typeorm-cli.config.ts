import { CreateAuthor1658015205318 } from "src/migrations/1658015205318-create-author";
import { AuthorTimestamp1658022331591 } from "src/migrations/1658022331591-author-timestamp";
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
    CreateAuthor1658015205318,
    AuthorTimestamp1658022331591,
  ]
});
