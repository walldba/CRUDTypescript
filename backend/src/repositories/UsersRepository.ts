import { getRepository } from 'typeorm';
import { ContextStrategy } from '../database/ContextStrategy';
import { IRepository } from '../database/interfaces/IRepository';
import { MongoStrategy } from '../database/MongoStrategy';
import { PostgresStrategy } from '../database/PostgresStrategy';
import { Users } from '../entity/Users';

class UserRepository implements IRepository<Users> {
  private _context = new ContextStrategy(new PostgresStrategy(Users));

  async save(entity: Users): Promise<Users | boolean> {
    return await this._context.save(entity);
  }

  async find(): Promise<Users[]> {
    return await this._context.find();
  }

  async findOne(id: string): Promise<Users | undefined> {
    return await getRepository(Users).findOne(id);
  }

  async update(id: string, entity: Users): Promise<Users> {
    await getRepository(Users).update(id, entity);

    return (await getRepository(Users).findOne(id)) as Users;
  }
  async delete(id: string): Promise<boolean> {
    const row = await getRepository(Users).delete(id);
    return row.affected === 1;
  }
}

export default new UserRepository();
