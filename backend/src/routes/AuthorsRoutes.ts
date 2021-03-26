import { Router, Request, Response } from "express";
import * as controller from "../controllers/AuthorsController";

const routes = Router();

routes.post("/save", controller.saveAuthor);

routes.get("/find", controller.findAuthors);

routes.get("/findone", controller.findOneAuthor);

routes.put("/updateOne", controller.updateOne);

routes.post("/deleteOne", controller.deleteOne);

export default routes;
