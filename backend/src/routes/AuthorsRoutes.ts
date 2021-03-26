import { Router, Request, Response } from "express";
import * as controller from "../controllers/AuthorsController";

const routes = Router();

routes.post("/save", controller.saveAuthor);

routes.get("/find", controller.findAuthors);

routes.get("/findone/:id", controller.findOneAuthor);

routes.put("/updateOne/:id", controller.updateOne);

routes.post("/deleteOne/:id", controller.deleteOne);

export default routes;
