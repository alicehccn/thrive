import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1656918134563 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS author(
          id UUID PRIMARY KEY,
          name VARCHAR (50) UNIQUE
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE author
    `);
  }
}
