import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Books } from "../entity/Books";
import BookRepository from "../repositories/BooksRepository";

export const saveUser = async (request: Request, response: Response) => {
  try {
    const { name, description, authors } = request.body;

    const books = getRepository(Books).create({ name, description, authors });

    const errors = await validate(books);
    if (errors.length > 0) return response.status(400).send(errors);
    else {
      const result = await BookRepository.save(books);
      return response.json(result);
    }
  } catch (error) {
    return response.status(400).send(error);
  }
};
