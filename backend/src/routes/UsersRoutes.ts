import { Router, Request, Response } from 'express';
import * as controller from '../controllers/UsersController';

const routes = Router();

routes.post('/save', controller.saveUser);

routes.get('/find', controller.findUsers);

routes.get('/findone/:id', controller.findOneUser);

routes.put('/updateOne/:id', controller.updateOne);

routes.post('/deleteOne/:id', controller.deleteOne);

export default routes;
