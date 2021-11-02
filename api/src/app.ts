import express, {
  Express,
  Request,
  Response,
  Router,
  NextFunction,
} from "express";
import morgan from "morgan";
import low from "lowdb";
import DatabaseSchema from "DatabaseSchema";

import { createRoutes } from "./routes";

export const createApp = (db: low.LowdbSync<DatabaseSchema>) => {
  const app: Express = express();

  // Shows request log on terminal
  // https://github.com/expressjs/morgan
  app.use(morgan("dev"));

  // Parses incoming requests with JSON payloads
  // http://expressjs.com/es/api.html#express.json
  app.use(express.json());

  // Parses incoming requests with urlencoded payloads
  // http://expressjs.com/es/api.html#express.urlencoded
  app.use(express.urlencoded({ extended: false }));

  const port: string = process.env.PORT || "3000";

  // Assigns setting name to value
  // http://expressjs.com/es/api.html#app.set
  app.set("port", port);

  app.use((req: Request, res: Response, next: NextFunction) => {
    req.context = { db };
    next;
  });

  app.use("/api", createRoutes());

  return app;
};
