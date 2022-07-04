import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTable1656921454113 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS note(
                id UUID PRIMARY KEY,
                date VARCHAR (50),
                title VARCHAR (100),
                subtitles VARCHAR(100),
                body text,
                recommendations integer,
                author uuid);
            `);
      }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE note
        `);
    }
}
