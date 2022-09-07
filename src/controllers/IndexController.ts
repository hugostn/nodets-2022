import { Request, Response, Router } from 'express';

const IndexController: Router = Router();

IndexController.get('/', (req: Request, res: Response) => res.json({
    info: "Node Typescript 2022",
},
))

export default IndexController;