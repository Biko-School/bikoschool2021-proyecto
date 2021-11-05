import express, { Express, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import { routes } from './routes';
import cors from 'cors';
import { LowdbSync } from 'lowdb';
import { DatabaseSchema } from 'DatabaseSchema';

export function getApp(db: LowdbSync<DatabaseSchema>): Express {
  const app: Express = express();

  // Shows request log on terminal
  // https://github.com/expressjs/morgan
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  // Parses incoming requests with JSON payloads
  // http://expressjs.com/es/api.html#express.json
  app.use(express.json());

  // Parses incoming requests with urlencoded payloads
  // http://expressjs.com/es/api.html#express.urlencoded
  app.use(express.urlencoded({ extended: false }));

  app.use(cors());

  app.use((req: Request, res: Response, next: NextFunction) => {
    req.context = { db };
    next();
  });

  app.use('/api', routes);

  return app;
}
