export interface IRepository<T>
{
    save(entity: T) : Promise<T>;  
    find(entity: T) : Promise<T[]>;  
    findOne(entity: T) : Promise<T>;  
    update(id: string, entity: T) : Promise<T>;  
    delete(id: string) : Promise<T>;  
}