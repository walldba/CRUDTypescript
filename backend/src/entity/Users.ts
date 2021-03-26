import { IsEmail } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  firstName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  login: number;

  @Column()
  password: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;
}
