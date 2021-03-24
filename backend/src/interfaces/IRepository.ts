export interface IRepository<T> {
  save(entity: T): Promise<T>;
  find(): Promise<T[]>;
  findOne(id: string): Promise<T | undefined>;
  update(id: string, entity: T): Promise<T>;
  delete(id: string): Promise<T>;
}
