import { Router, Request, Response } from 'express';
import * as controller from '../controllers/TransactionController';

const routes = Router();

routes.post('/insert', controller.save);

export default routes;
