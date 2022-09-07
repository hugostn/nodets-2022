import { Request, Response, Router } from 'express';

const ConfigController: Router = Router();

ConfigController.get('/', (req: Request, res: Response) => res.json({
    maxTimeSeconds: 10,
    expiration: 5
},
))


export default ConfigController;