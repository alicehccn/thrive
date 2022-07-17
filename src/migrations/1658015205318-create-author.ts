import { MigrationInterface, QueryRunner } from "typeorm"
import { v4 } from "uuid";

export class createAuthor1658015205318 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO author (id, username)
            VALUES ('${v4()}', 'aria')
            ON CONFLICT (username) DO NOTHING;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM author WHERE username = 'aria';
        `)
    }

}
