import { getRepository } from 'typeorm';
import { ContextStrategy } from '../database/ContextStrategy';
import { IRepository } from '../database/interfaces/IRepository';
import { PostgresStrategy } from '../database/PostgresStrategy';
import { Books } from '../entity/Books';

class BookRepository implements IRepository<Books> {
  private _context = new ContextStrategy(new PostgresStrategy(Books));

  async save(entity: Books): Promise<Books> {
    return await this._context.save(entity);
  }

  async find(): Promise<Books[]> {
    return await this._context.find();
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
