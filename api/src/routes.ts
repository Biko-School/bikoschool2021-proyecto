import { Router, NextFunction, Request, Response } from 'express';

export const routes = Router();

routes.get('/memes', (req: Request, res: Response) => {
  res.status(200).json([{ data: 'Endika' }, { data: 'Carlos' }]);
});
