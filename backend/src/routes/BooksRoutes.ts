import { Router, Request, Response } from "express";
import * as controller from "../controllers/BooksController";

const routes = Router();

routes.post("/save", controller.saveBook);

routes.get("/find", controller.findBooks);

routes.get("/findone/:id", controller.findOneBook);

routes.put("/updateOne/:id", controller.updateOne);

routes.post("/deleteOne/:id", controller.deleteOne);

export default routes;
