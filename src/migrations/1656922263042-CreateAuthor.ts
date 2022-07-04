import { MigrationInterface, QueryRunner } from "typeorm";
import { uuid } from "uuidv4";

export class CreateAuthor1656922263042 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO author(id, name)
            VALUES('${uuid()}', 'admin')
        `);
  }
  /* eslint-disable @typescript-eslint/no-empty-function */
  public async down(): Promise<void> {}
}
