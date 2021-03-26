import { getRepository } from "typeorm";
import { Authors } from "../entity/Authors";
import { IRepository } from "../interfaces/IRepository";

class AuthorRepository implements IRepository<Authors> {
  async save(entity: Authors): Promise<Authors> {
    return await getRepository(Authors).save(entity);
  }
  async find(): Promise<Authors[]> {
    return await getRepository(Authors).find();
  }
  async findOne(id: string): Promise<Authors | undefined> {
    return await getRepository(Authors).findOne(id);
  }
  async update(id: string, entity: Authors): Promise<Authors> {
    return new Authors();
    // const user = await getRepository(Authors).findOne({ where: { id: id } });
    // const user = new Authors();
    // return await getRepository(Authors).update(user);
  }
  async delete(id: string): Promise<Authors> {
    return new Authors();
    // let user = await getRepository(Authors).findOne(id);
    // return await getRepository(Authors).remove(user);
  }
}

export default new AuthorRepository();
