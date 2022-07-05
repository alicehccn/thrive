import { MigrationInterface, QueryRunner } from "typeorm"

export class UpdateColName1657001365744 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('note', 'date')
    }

  // eslint-disable-next-line
    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
