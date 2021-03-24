import { getRepository } from "typeorm";
import { Authors } from "../entity/Authors";
import { IRepository } from "../interfaces/IRepository";

class AuthorRepository implements IRepository<Authors> {
  async save(entity: Authors): Promise<Authors> {
    return await getRepository(Authors).save(entity);
  }
  async find(entity: Authors): Promise<Authors[]> {
    throw new Error("Method not implemented.");
  }
  async findOne(entity: Authors): Promise<Authors> {
    throw new Error("Method not implemented.");
  }
  async update(id: string, entity: Authors): Promise<Authors> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<Authors> {
    throw new Error("Method not implemented.");
  }
}

export default new AuthorRepository();
