import { Request, Response } from 'express';
import TransactionRepository from '../repositories/TransactionRepository';
import Transaction from '../entity/Transaction';

export const save = async (request: Request, response: Response) => {
  try {
    const { clientName, authorName, bookName, price } = request.body;
    const transaction = new Transaction(
      clientName,
      authorName,
      bookName,
      price
    );

    const result = await TransactionRepository.save(transaction);
    if (result) return response.json(result);
    return response.status(400).send('Transaction failed');
  } catch (error) {
    console.log('Deu ruim', error);
    return response.status(400).send(error);
  }
};
