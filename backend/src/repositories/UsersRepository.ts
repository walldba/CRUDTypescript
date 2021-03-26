import { getRepository } from "typeorm";
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
  async update(id: string, entity: any): Promise<Users> {
    await getRepository(Users).update(id, entity);

    return (await getRepository(Users).findOne(id)) as Users;
  }
  async delete(id: string): Promise<boolean> {
    const row = await getRepository(Users).delete(id);
    return row.affected === 1;
  }
}

export default new UserRepository();
// export const saveUser = async(user : Users) => await getRepository(Users).save(user);
