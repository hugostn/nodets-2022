import { Application, Router } from 'express';
import ConfigController from '../controllers/ConfigController';

const routes: [string, Router][] = [
  ['/', ConfigController]
];

export default (app: Application) => {
  routes.forEach(([url, controller]) => app.use(url, controller));
};
 