import { MigrationInterface, QueryRunner } from "typeorm";
import { v4 } from "uuid";

export class Initialize1656974386913 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const authorId = v4();
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS note (
        id UUID NOT NULL UNIQUE PRIMARY KEY, 
        title VARCHAR(50),
        subtitles VARCHAR(50),
        body text,
        recommendations INT,
        author UUID,
        createdAt DATE,
        updatedAt DATE
      );
      CREATE TABLE IF NOT EXISTS author (
        id UUID NOT NULL UNIQUE PRIMARY KEY, 
        username VARCHAR(50) UNIQUE
      );
      INSERT INTO author (id, username)
        VALUES ('${authorId}', 'aria')
        ON CONFLICT (id) DO NOTHING;
      INSERT INTO note (
        id,
        title,
        subtitles,
        body,
        recommendations,
        author,
        createdAt,
        updatedAt
      ) VALUES (
        '${v4()}',
        'Day 0',
        '',
        'Getting started.',
        0,
        '${authorId}',
        now(),
        now()
      );
    `);
  }

  // eslint-disable-next-line
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
