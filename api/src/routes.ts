import { Router, NextFunction, Request, Response } from 'express';
import { LowdbSync } from 'lowdb';
import { DatabaseSchema } from 'DatabaseSchema';

// ## TODO: tipado db
export function getRoutes(db: LowdbSync<DatabaseSchema>): Router {
  const routes = Router();

  routes.get('/memes', (req: Request, res: Response) => {
    const memes = db.get('memes').take(50).value();
    res.status(200).json(memes);
  });

  return routes;
}
