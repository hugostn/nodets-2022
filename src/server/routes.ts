import { Application, Router } from 'express';
import IndexController from '../controllers/IndexController';
import UserController from '../controllers/UserController';

const routes: [string, Router][] = [  
  ['/user/', UserController],
  ['/', IndexController]
];

export default (app: Application) => {
  routes.forEach(([url, controller]) => app.use(url, controller));
};
 