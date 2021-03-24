import { getRepository } from "typeorm";
import { Users } from "../entity/Users";
import { IRepository } from "../interfaces/IRepository";

class UserRepository implements IRepository<Users>
{
    async save(entity: Users): Promise<Users> {
        return await getRepository(Users).save(entity);
    }
    async find(entity: Users): Promise<Users[]> {
        throw new Error("Method not implemented.");
    }
    async findOne(entity: Users): Promise<Users> {
        throw new Error("Method not implemented.");
    }
    async update(id: string, entity: Users): Promise<Users> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<Users> {
        throw new Error("Method not implemented.");
    }
}

export default new UserRepository;
// export const saveUser = async(user : Users) => await getRepository(Users).save(user);
    