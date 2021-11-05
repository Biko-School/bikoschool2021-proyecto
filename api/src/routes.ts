import { Router, Request, Response } from 'express';
import { DatabaseMeme } from './DatabaseSchema';
import { Meme } from './Meme';

export const routes = Router();

routes.get('/memes', (req: Request, res: Response) => {
  const db = req.context.db;
  const DBMemes: DatabaseMeme[] = db.get('memes').take(50).value();
  const memes: Meme[] = DBMemes.map((DBMeme: DatabaseMeme) => {
    return {
      id: DBMeme.id,
      url: DBMeme.images.original.url,
      title: DBMeme.title,
    };
  });
  res.status(200).json(memes);
});
