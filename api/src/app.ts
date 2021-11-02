import express, { Express, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { routers } from "./routers";

export function getApp(db) {
  const app: Express = express();

  // Shows request log on terminal
  // https://github.com/expressjs/morgan
  if (process.env.NODE_ENV !== "test") {
    app.use(morgan("dev"));
  }

  // Parses incoming requests with JSON payloads
  // http://expressjs.com/es/api.html#express.json
  app.use(express.json());

  // Parses incoming requests with urlencoded payloads
  // http://expressjs.com/es/api.html#express.urlencoded
  app.use(express.urlencoded({ extended: false }));

  app.use((req: Request, res: Response, next: NextFunction) => {
    req.context = { db };
    next();
  });

  app.use("/api", routers);

  app.get("/api/memes/error", (req: Request, res: Response) => {
    res.sendStatus(400);
  });

  return app;
}
