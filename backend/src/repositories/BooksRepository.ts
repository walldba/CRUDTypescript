import { getRepository } from "typeorm";
import { Books } from "../entity/Books";
import { IRepository } from "../interfaces/IRepository";

class BookRepository implements IRepository<Books> {
  async save(entity: Books): Promise<Books> {
    return await getRepository(Books).save(entity);
  }
  async find(): Promise<Books[]> {
    return await getRepository(Books).find();
  }
  async findOne(id: string): Promise<Books | undefined> {
    return await getRepository(Books).findOne(id);
  }
  async update(id: string, entity: Books): Promise<Books> {
    return new Books();
    // const user = await getRepository(Books).findOne({ where: { id: id } });
    // const user = new Books();
    // return await getRepository(Books).update(user);
  }
  async delete(id: string): Promise<Books> {
    return new Books();
    // let user = await getRepository(Books).findOne(id);
    // return await getRepository(Books).remove(user);
  }
}

export default new BookRepository();
