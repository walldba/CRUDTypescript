import { Router, Request, Response } from "express";
import * as controller from "../controllers/usersController";

const routes = Router();

routes.post("/save", controller.saveUser)

routes.get("/", (request: Request, response: Response) => {
    return response.json({ message: "Hello World" });
  });

  export default routes;