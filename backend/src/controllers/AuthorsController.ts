import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Authors } from "../entity/Authors";
import AuthorRepository from "../repositories/AuthorsRepository";

export const saveAuthor = async (request: Request, response: Response) => {
  try {
    const { name } = request.body;

    const author = getRepository(Authors).create({ name });

    const errors = await validate(author);
    if (errors.length > 0) return response.status(400).send(errors);
    else {
      const result = await AuthorRepository.save(author);
      return response.json(result);
    }
  } catch (error) {
    return response.status(400).send(error);
  }
};

export const findAuthors = async (request: Request, response: Response) => {
  try {
    const result = await AuthorRepository.find();

    if (result) return response.json(result);
    return response.json({ message: `Author Not found` });
  } catch (error) {
    return response.status(400).send(error);
  }
};

export const findOneAuthor = async (request: Request, response: Response) => {
  try {
    const { id } = request.body;
    const result = await AuthorRepository.findOne(id);

    if (result) return response.json(result);
    return response.json({ message: `Author ${id} Not found` });
  } catch (error) {
    return response.status(400).send(error);
  }
};

export const updateOne = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const { name } = request.body;

    const author = getRepository(Authors).create({ name });

    const result = await AuthorRepository.update(id, author);
    return response.json(result);
  } catch (error) {
    return response.status(400).send(error);
  }
};
