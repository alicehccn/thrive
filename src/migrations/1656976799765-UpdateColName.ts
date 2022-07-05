import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateColName1656976799765 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE author RENAME COLUMN name to username;
        `);
  }
  /* eslint-disable */
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
