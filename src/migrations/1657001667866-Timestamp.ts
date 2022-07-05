import { MigrationInterface, QueryRunner } from "typeorm";

export class Timestamp1657001667866 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE IF EXISTS note 
      ADD COLUMN createdAt DATE;
      
      ALTER TABLE IF EXISTS note 
      ADD COLUMN updatedAt DATE;
  `);
  }

  // eslint-disable-next-line
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
