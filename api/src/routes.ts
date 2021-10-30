import express, { Express, Request, Response, Router } from "express";
import fs from "fs";
import Meme from "meme";

const routes = express.Router();

routes.get("/memes", (req: Request, res: Response) => {
  res.send(new Array(50));
});

export default routes;
