import express, { Express } from "express";
import morgan from "morgan";
import low from "lowdb";

import { routes } from "./routes";
import { DatabaseSchema } from "./DatabaseSchema";

export function createApp(db: low.LowdbSync<DatabaseSchema>) {
  const app: Express = express();

  // Shows request log on terminal
  // https://github.com/expressjs/morgan
  app.use(morgan("dev"));

  // Añade el adaptador de la base de datos en cada petición
  app.use((req, res, next) => {
    req.context = { db };
    next();
  });

  // Parses incoming requests with JSON payloads
  // http://expressjs.com/es/api.html#express.json
  app.use(express.json());
  // Parses incoming requests with urlencoded payloads
  // http://expressjs.com/es/api.html#express.urlencoded
  app.use(express.urlencoded({ extended: false }));

  app.use("/api", routes);

  return app;
}
