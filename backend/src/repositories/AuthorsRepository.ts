import { getRepository } from 'typeorm';
import { Authors } from '../entity/Authors';
import { IRepository } from '../interfaces/IRepository';

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
    await getRepository(Authors).update(id, entity);

    return (await getRepository(Authors).findOne(id)) as Authors;
  }
  async delete(id: string): Promise<boolean> {
    const row = await getRepository(Authors).delete(id);
    return row.affected === 1;
  }
}

export default new AuthorRepository();
