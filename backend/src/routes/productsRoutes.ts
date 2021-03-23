import { Router, Request, Response } from "express";
//importar Controllers

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
    return response.json({ message: "Hello World" });
  });

  export default routes;