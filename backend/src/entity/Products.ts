import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Products{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    active: boolean;

    @Column()
    created_at: Date;
}
