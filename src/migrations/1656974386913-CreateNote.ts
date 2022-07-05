import { MigrationInterface, QueryRunner } from "typeorm";
import { uuid } from "uuidv4";

export class CreateNote1656974386913 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS note (
        id UUID NOT NULL UNIQUE PRIMARY KEY, 
        date VARCHAR(50),
        title VARCHAR(50),
        subtitles VARCHAR(50),
        body text,
        recommendations INT,
        author UUID
      );
      CREATE TABLE IF NOT EXISTS author (
        id UUID NOT NULL UNIQUE PRIMARY KEY, 
        username VARCHAR(50) UNIQUE
      );
      INSERT INTO author (id, username)
        VALUES ('${uuid()}', 'aria')
        ON CONFLICT (username) DO NOTHING;
    `);
  }

  // eslint-disable-next-line
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
