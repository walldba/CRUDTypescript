import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Authors } from "../entity/Authors";
import AuthorRepository from "../repositories/AuthorsRepository";

export const saveUser = async (request: Request, response: Response) => {
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
