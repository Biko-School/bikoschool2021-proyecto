import { Router, NextFunction, Request, Response } from 'express';
import { LowdbSync } from 'lowdb';
import { DatabaseSchema } from 'DatabaseSchema';

export const routes = Router();

routes.get('/memes', (req: Request, res: Response) => {
  const db = req.context.db;
  const memes = db.get('memes').take(50).value();
  res.status(200).json(memes);
});
