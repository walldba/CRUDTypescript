import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeTypeIDBooks1618345475591 implements MigrationInterface {
    name = 'ChangeTypeIDBooks1618345475591'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "PK_f3f2f25a099d24e12545b70b022"`);
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "books" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "PK_f3f2f25a099d24e12545b70b022"`);
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "books" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id")`);
    }

}
