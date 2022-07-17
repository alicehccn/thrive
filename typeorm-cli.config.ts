import { CreateAuthor1658015205318 } from "src/migrations/1658015205318-create-author";
import { Author, Note } from "src/notes/entities";
import { DataSource } from "typeorm";

export default new DataSource({
  type: "postgres",
  host: "ec2-44-242-15-100.us-west-2.compute.amazonaws.com",
  port: 35000,
  username: "postgres",
  password: "postgres",
  database: "db",
  entities: [Note, Author],
  migrations: [CreateAuthor1658015205318],
});
