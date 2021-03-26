import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Books } from "../entity/Books";
import BookRepository from "../repositories/BooksRepository";

export const saveBook = async (request: Request, response: Response) => {
  try {
    const { name, description, authors } = request.body;

    const book = getRepository(Books).create({
      name,
      description,
      authors,
    });

    const errors = await validate(book);
    if (errors.length > 0) return response.status(400).send(errors);
    else {
      const result = await BookRepository.save(book);
      return response.json(result);
    }
  } catch (error) {
    return response.status(400).send(error);
  }
};

export const findBooks = async (request: Request, response: Response) => {
  try {
    const result = await BookRepository.find();

    if (result) return response.json(result);
    return response.json({ message: `Book Not found` });
  } catch (error) {
    return response.status(400).send(error);
  }
};

export const findOneBook = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const result = await BookRepository.findOne(id);

    if (result) return response.json(result);
    return response.json({ message: `id ${id} Not found` });
  } catch (error) {
    return response.status(400).send(error);
  }
};

export const updateOne = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const { name, description, authors } = request.body;

    const book = getRepository(Books).create({
      name,
      description,
      authors,
    });

    const result = await BookRepository.update(id, book);
    return response.json(result);
  } catch (error) {
    return response.status(400).send(error);
  }
};

export const deleteOne = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const result = await BookRepository.delete(id);

    if (result) return response.json(`Book ${id} was removed`);
    return response.json({ message: `Book ${id} Not found` });
  } catch (error) {
    return response.status(400).send(error);
  }
};
