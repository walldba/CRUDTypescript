import { Router, Request, Response } from "express";
import * as controller from "../controllers/BooksController";

const routes = Router();

routes.post("/save", controller.saveBook);

routes.get("/find", controller.findBooks);

routes.get("/findone", controller.findOneBook);

routes.put("/updateOne", controller.updateOneBook);

routes.post("/deleteOne", controller.deleteOne);

export default routes;
