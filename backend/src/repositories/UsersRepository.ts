import { getRepository, UpdateResult } from "typeorm";
import { Users } from "../entity/Users";
import { IRepository } from "../interfaces/IRepository";

class UserRepository implements IRepository<Users> {
  async save(entity: Users): Promise<Users> {
    return await getRepository(Users).save(entity);
  }
  async find(): Promise<Users[]> {
    return await getRepository(Users).find();
  }
  async findOne(id: string): Promise<Users | undefined> {
    return await getRepository(Users).findOne(id);
  }
  async update(id: string, entity: Users): Promise<Users> {
    return new Users();
    // const user = await getRepository(Users).findOne({ where: { id: id } });
    // const user = new Users();
    // return await getRepository(Users).update(user);
  }
  async delete(id: string): Promise<Users> {
    return new Users();
    // let user = await getRepository(Users).findOne(id);
    // return await getRepository(Users).remove(user);
  }
}

export default new UserRepository();
// export const saveUser = async(user : Users) => await getRepository(Users).save(user);
