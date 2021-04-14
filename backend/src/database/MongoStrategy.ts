import { Collection, Db } from 'mongodb';
import { IRepository } from './interfaces/IRepository';

export class MongoStrategy<T> implements IRepository<T> {
  private _db: Db;
  private _collection: string;

  constructor(db: Db, collection: string) {
    this._db = db;
    this._collection = collection;
  }

  async save(entity: T): Promise<T | boolean> {
    const result = await this._db
      .collection(this._collection)
      .insertOne(entity);

    return result?.insertedCount === 1;
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
