import { getRepository } from 'typeorm';
import { ContextStrategy } from '../database/ContextStrategy';
import { IRepository } from '../database/interfaces/IRepository';
import { PostgresStrategy } from '../database/PostgresStrategy';
import { Authors } from '../entity/Authors';

class AuthorRepository implements IRepository<Authors> {
  private _context = new ContextStrategy(new PostgresStrategy(Authors));

  async save(entity: Authors): Promise<Authors | boolean> {
    return await this._context.save(entity);
  }

  async find(): Promise<Authors[]> {
    return await this._context.find();
  }

  async findOne(id: string): Promise<Authors | undefined> {
    return await getRepository(Authors).findOne(id);
  }

  async update(id: string, entity: Authors): Promise<Authors> {
    await getRepository(Authors).update(id, entity);

    return (await getRepository(Authors).findOne(id)) as Authors;
  }
  async delete(id: string): Promise<boolean> {
    const row = await getRepository(Authors).delete(id);
    return row.affected === 1;
  }
}

export default new AuthorRepository();
