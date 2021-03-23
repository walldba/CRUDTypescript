import { getRepository } from "typeorm";
import { Users } from "../entity/Users";

export const saveUser = async(user : Users) => await getRepository(Users).save(user);
    