import express, { Express, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { routes } from "./routes";

export const port: string = process.env.PORT || "3000";

export const createApp = (db) => {
  const app: Express = express();
  // Shows request log on terminal
  // https://github.com/expressjs/morgan
  app.use(morgan("dev"));
  if (process.env.NODE_ENV !== "test") {
    app.use(morgan("dev"));
  }
  // Parses incoming requests with JSON payloads
  // http://expressjs.com/es/api.html#express.json
  app.use(express.json());
  // Parses incoming requests with urlencoded payloads
  // http://expressjs.com/es/api.html#express.urlencoded
  app.use(express.urlencoded({ extended: false }));
  // Routes every path
  // http://expressjs.com/es/api.html#app.use

  app.use((req: Request, res: Response, next: NextFunction) => {
    req.context = { db };

    next();
  });

  app.use("/api", routes);

  // Assigns setting name to value
  // http://expressjs.com/es/api.html#app.set
  app.set("port", port);

  return app;
};
