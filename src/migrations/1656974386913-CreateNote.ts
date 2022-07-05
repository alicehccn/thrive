import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateNote1656974386913 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS note (
        id UUID NOT NULL UNIQUE PRIMARY KEY, 
        date VARCHAR(50),
        title VARCHAR(50),
        subtitles VARCHAR(50),
        body text,
        author UUID NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS note 
    `);
  }
}
