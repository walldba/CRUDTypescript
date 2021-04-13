import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Users } from '../entity/Users';
import UserRepository from '../repositories/UsersRepository';
import encrypt from '../utils/password';

export const saveUser = async (request: Request, response: Response) => {
  try {
    const { firstName, login, email, password, active } = request.body;

    const user = getRepository(Users).create({
      firstName,
      login,
      email,
      password,
      active,
    });

    const errors = await validate(user);

    if (errors.length > 0) return response.status(400).send(errors);
    else {
      user.password = await encrypt(password);
      const result = await UserRepository.save(user);
      return response.json(result);
    }
  } catch (error) {
    return response.status(400).send(error);
  }
};

export const findUsers = async (request: Request, response: Response) => {
  try {
    const result = await UserRepository.find();

    if (result) return response.json(result);
    return response.json({ message: `User Not found` });
  } catch (error) {
    return response.status(400).send(error);
  }
};

export const findOneUser = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const result = await UserRepository.findOne(id);

    if (result) return response.json(result);
    return response.json({ message: `User ${id} Not found` });
  } catch (error) {
    return response.status(400).send(error);
  }
};

export const updateOne = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const { firstName, login, email, password, active } = request.body;

    const user = getRepository(Users).create({
      firstName,
      login,
      email,
      password,
      active,
    });

    const errors = await validate(user);

    if (errors.length > 0) return response.status(400).send(errors);
    else {
      user.password = await encrypt(password);
      const result = await UserRepository.update(id, user);
      if (result) return response.json(result);
      return response.json({ message: `User ${id} Not found` });
    }
  } catch (error) {
    return response.status(400).send(error);
  }
};

export const deleteOne = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const result = await UserRepository.delete(id);

    if (result) return response.json(`User ${id} was removed`);
    return response.json({ message: `User ${id} Not found` });
  } catch (error) {
    return response.status(400).send(error);
  }
};
