import express, {
  Express,
  Request,
  Response,
  NextFunction,
} from "express";
import morgan from "morgan";
import low from "lowdb";
import DatabaseSchema from "core/domain/model/DatabaseSchema";

import { routes } from "./routes";

export const createApp = (db: low.LowdbSync<DatabaseSchema>) => {
  const app: Express = express();

  // Shows request log on terminal
  // https://github.com/expressjs/morgan
  if (process.env.NODE_ENV !== 'test')
    app.use(morgan("dev"));

  // Parses incoming requests with JSON payloads
  // http://expressjs.com/es/api.html#express.json
  app.use(express.json());

  // Parses incoming requests with urlencoded payloads
  // http://expressjs.com/es/api.html#express.urlencoded
  app.use(express.urlencoded({ extended: false }));

  const port: string = process.env.PORT || "3001";

  // Assigns setting name to value
  // http://expressjs.com/es/api.html#app.set
  app.set("port", port);

  app.use((req: Request, res: Response, next: NextFunction) => {
    req.context = { db };
    next();
  });

  app.use("/api", routes);

  return app;
};
