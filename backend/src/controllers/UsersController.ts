import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Users } from "../entity/Users";

  export const saveUser = 
  async (request: Request, response: Response) => {
    try {
      const {firstName, login, email, password, active} = request.body;
      
      const repository = getRepository(Users).create(
      {
        firstName,login,email,password,active
      });
      
      const errors = await validate(repository);
      if(errors.length > 0)
        return response.status(400).send(errors);
      else
      {
        const user = await getRepository(Users).save(request.body);
        return response.json(user);
      }
    } catch (error) {
      return response.status(400).send(error);
    }
 };

