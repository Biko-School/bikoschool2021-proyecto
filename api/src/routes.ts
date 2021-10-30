import { Router, NextFunction, Request, Response } from 'express';

// ## TODO: tipado db
export function getRoutes(db): Router {
  const routes = Router();

  routes.get('/memes', (req: Request, res: Response) => {
    const memes = db.get('memes').take(50).value();
    res.status(200).json(memes);
  });

  return routes;
}
