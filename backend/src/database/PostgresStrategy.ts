import { EntityTarget, getRepository } from 'typeorm';
import { IRepository } from './interfaces/IRepository';

export class PostgresStrategy<T> implements IRepository<T> {
  private _repository: EntityTarget<T>;

  constructor(repository: EntityTarget<T>) {
    this._repository = repository;
  }

  async save(entity: T): Promise<T> {
    return await getRepository(this._repository).save(entity);
  }

  async find(): Promise<T[]> {
    return await getRepository(this._repository).find();
  }

  async findOne(id: string): Promise<T | undefined> {
    return await getRepository(this._repository).findOne(id);
  }

  async update(id: string, entity: T): Promise<T> {
    await getRepository(this._repository).update(id, entity);

    return (await getRepository(this._repository).findOne(id)) as T;
  }

  async delete(id: string): Promise<boolean> {
    const row = await getRepository(this._repository).delete(id);
    return row.affected === 1;
  }
}
