import { Router, Request, Response } from "express";
import * as controller from "../controllers/UsersController";

const routes = Router();

routes.post("/save", controller.saveUser);

routes.get("/find", controller.findUsers);

routes.get("/findone", controller.findOneUser);

routes.put("/updateOne", controller.updateOne);

routes.post("/deleteOne", controller.deleteOne);

export default routes;
