import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAuthor1656974210660 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS author (
        id UUID NOT NULL UNIQUE PRIMARY KEY, 
        username VARCHAR(50) NOT NULL UNIQUE
      )
  `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS author 
    `);
  }
}