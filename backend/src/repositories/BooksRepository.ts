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
    await getRepository(Books).update(id, entity);

    return (await getRepository(Books).findOne(id)) as Books;
  }
  async delete(id: string): Promise<boolean> {
    const row = await getRepository(Books).delete(id);
    return row.affected === 1;
  }
}

export default new BookRepository();
