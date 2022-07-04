import { MigrationInterface, QueryRunner } from "typeorm";
import { uuid } from "uuidv4";

export class CreateAuthor1656971968413 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE IF NOT EXISTS author (
        id UUID NOT NULL UNIQUE PRIMARY KEY, 
        username VARCHAR(50) NOT NULL UNIQUE
      )
  `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      DROP TABLE IF EXISTS author 
    `);
  }
}
