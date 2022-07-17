import { MigrationInterface, QueryRunner } from "typeorm";

export class authorTimestamp1658022331591 implements MigrationInterface {
    name = 'authorTimestamp1658022331591'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "author"
            ADD "createdat" TIMESTAMP NOT NULL DEFAULT now()
        `);
        await queryRunner.query(`
            ALTER TABLE "author"
            ADD "updatedat" TIMESTAMP NOT NULL DEFAULT now()
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "author" DROP COLUMN "updatedat"
        `);
        await queryRunner.query(`
            ALTER TABLE "author" DROP COLUMN "createdat"
        `);
    }

}
