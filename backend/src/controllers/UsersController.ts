import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Users } from "../entity/Users";
import * as repository from "../repositories/userRepository";

  export const saveUser = 
  async (request: Request, response: Response) => {
    try {
      const {firstName, login, email, password, active} = request.body;
      
      const user = getRepository(Users).create(
      {
        firstName,login,email,password,active
      });
      
      const errors = await validate(user);
      if(errors.length > 0)
        return response.status(400).send(errors);
      else
      {
        const result = await repository.saveUser(user);
        return response.json(result);
      }
    } catch (error) {
      return response.status(400).send(error);
    }
 };

