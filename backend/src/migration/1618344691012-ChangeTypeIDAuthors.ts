import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeTypeIDAuthors1618344691012 implements MigrationInterface {
    name = 'ChangeTypeIDAuthors1618344691012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_8abb9d1f840137808b5d724ac26"`);
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "authorsId"`);
        await queryRunner.query(`ALTER TABLE "books" ADD "authorsId" uuid`);
        await queryRunner.query(`ALTER TABLE "authors" DROP CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88"`);
        await queryRunner.query(`ALTER TABLE "authors" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "authors" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "authors" ADD CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_8abb9d1f840137808b5d724ac26" FOREIGN KEY ("authorsId") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_8abb9d1f840137808b5d724ac26"`);
        await queryRunner.query(`ALTER TABLE "authors" DROP CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88"`);
        await queryRunner.query(`ALTER TABLE "authors" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "authors" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "authors" ADD CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "authorsId"`);
        await queryRunner.query(`ALTER TABLE "books" ADD "authorsId" integer`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_8abb9d1f840137808b5d724ac26" FOREIGN KEY ("authorsId") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
