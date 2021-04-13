import { promisify } from 'node:util';
import { IRepository } from './interfaces/IRepository';

export class MongoStrategy<T> implements IRepository<T> {
  save(entity: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  find(): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<T | undefined> {
    throw new Error('Method not implemented.');
  }
  update(id: string, entity: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<boolean> {
    console.log('teste');
    return new Promise(() => true);
  }
}
