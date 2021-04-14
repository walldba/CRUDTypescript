import { getRepository } from 'typeorm';
import { Db, MongoClient } from 'mongodb';
import { ContextStrategy } from '../database/ContextStrategy';
import { IRepository } from '../database/interfaces/IRepository';
import { MongoStrategy } from '../database/MongoStrategy';
import Transaction from '../entity/Transaction';
import connectMongoDb from '../../mongoConfig';

class TransactionRepository implements IRepository<Transaction> {
  async save(entity: any): Promise<any | boolean> {
    const db = await connectMongoDb();
    if (db) {
      const context = new ContextStrategy(new MongoStrategy(db, 'Transaction'));
      return await context.save(entity);
    } else {
      return null;
    }
  }

  async find(): Promise<Transaction[]> {
    throw new Error('Method not implemented.');
  }

  async findOne(id: string): Promise<Transaction | undefined> {
    throw new Error('Method not implemented.');
  }

  async update(id: string, entity: Transaction): Promise<Transaction> {
    throw new Error('Method not implemented.');

    return (await getRepository(Transaction).findOne(id)) as Transaction;
  }
  async delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

export default new TransactionRepository();
