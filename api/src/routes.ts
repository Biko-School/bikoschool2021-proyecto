import { Router } from "express";

import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

export const routes = Router();

interface DbSchema {
  memes: Meme[];
}

interface Meme {}

const adapter = new FileSync<DbSchema>("./db/db.json");

const db = low(adapter);

routes.get("/memes", (req, res) => {
  const memes = db.get("memes").take(50).value();
  res.status(200).json(memes);
});
