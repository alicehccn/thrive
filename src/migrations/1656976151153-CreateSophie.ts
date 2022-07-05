import { MigrationInterface, QueryRunner } from "typeorm";
import { uuid } from "uuidv4";

export class CreateSophie1656976151153 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const id = uuid();
    queryRunner.query(`
      INSERT INTO author (id, username)
        SELECT '${id}', 'nebula'
        WHERE
        NOT EXISTS (
          SELECT id FROM author WHERE id = '${id}'
        );
    `);
  }
  /* eslint-disable-next-line */
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
