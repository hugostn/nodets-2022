import {
    NextFunction, Request, Response, Router,
  } from 'express';
  import User from '../models/User'
  
  const UserController: Router = Router();  
  
  export type GetUser = {
    id: number
  };
  
  UserController.get('/:id', async (req: Request<GetUser>, res: Response, next: NextFunction) => {
    const { id } = req.params;
  
    let user: User = {
        id: id,
        name: "Hugo Sant'Ana"
    };  

    next(new Error('follower must be informed'));
    return;
  
    res.json({ data: user });
  });

  export default UserController;