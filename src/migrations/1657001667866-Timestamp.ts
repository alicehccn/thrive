import { CreateDateColumn, MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class Timestamp1657001667866 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE IF EXISTS note 
            ADD COLUMN created_at DATE;
            
            ALTER TABLE IF EXISTS note 
            ADD COLUMN updated_at DATE;
        `)
    }

  // eslint-disable-next-line
    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
