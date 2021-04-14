import { IRepository } from './interfaces/IRepository';

export class ContextStrategy<T> {
  strategy: IRepository<T>;

  constructor(strategy: IRepository<T>) {
    this.strategy = strategy;
  }

  async save(entity: T): Promise<T | boolean> {
    return await this.strategy.save(entity);
  }

  async find(): Promise<T[]> {
    return await this.strategy.find();
  }

  async findOne(id: string): Promise<T | undefined> {
    return await this.strategy.findOne(id);
  }

  async update(id: string, entity: T): Promise<T> {
    return await this.strategy.update(id, entity);
  }

  async delete(id: string): Promise<boolean> {
    return await this.strategy.delete(id);
  }
}
