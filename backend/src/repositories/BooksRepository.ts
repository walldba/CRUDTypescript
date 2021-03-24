import { getRepository } from "typeorm";
import { Books } from "../entity/Books";
import { IRepository } from "../interfaces/IRepository";

class BookRepository implements IRepository<Books>
{
    async save(entity: Books): Promise<Books> {
        return await getRepository(Books).save(entity);
    }
    async find(entity: Books): Promise<Books[]> {
        throw new Error("Method not implemented.");
    }
    async findOne(entity: Books): Promise<Books> {
        throw new Error("Method not implemented.");
    }
    async update(id: string, entity: Books): Promise<Books> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<Books> {
        throw new Error("Method not implemented.");
    }
}

export default new BookRepository;
    