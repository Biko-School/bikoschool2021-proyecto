import express, { Express, Request, Response, Router } from "express";
import fs from "fs";

import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { Meme } from "meme";

interface DatabaseSchema {
  memes: Meme[];
}

const adapter = new FileSync<DatabaseSchema>("./database/db.json");
const db = low(adapter);

const routes = express.Router();

routes.get("/memes", (req: Request, res: Response) => {
  res.status(200).json(db.get("memes").take(50).value());
});

export default routes;
