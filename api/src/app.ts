import express, { Express, Request, Response, Router } from "express";
import morgan from "morgan";
import { router } from "./routers";

export const app: Express = express();

// Shows request log on terminal
// https://github.com/expressjs/morgan
app.use(morgan("dev"));

// Parses incoming requests with JSON payloads
// http://expressjs.com/es/api.html#express.json
app.use(express.json());

// Parses incoming requests with urlencoded payloads
// http://expressjs.com/es/api.html#express.urlencoded
app.use(express.urlencoded({ extended: false }));

app.get("/api/memes", router);

app.get("/api/memes/error", (req: Request, res: Response) => {
  res.sendStatus(400);
});
