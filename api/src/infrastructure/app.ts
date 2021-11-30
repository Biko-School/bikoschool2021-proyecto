import express, { Express } from "express";
import morgan from "morgan";
import low from "lowdb";
import { routes } from "./routes";
import { DbSchema } from "../domain/DbSchema";

export const createApp = (db: low.LowdbSync<DbSchema>) => {
  const app = express();
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

  app.use((req, res, next) => {
    req.context = { db };
    next();
  });

  app.use("/api", routes);
  return app;
};
