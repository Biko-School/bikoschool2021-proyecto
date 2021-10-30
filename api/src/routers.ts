import express, { Express, Request, Response, Router } from "express";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

interface DatabaseSchema {
  memes: Meme[];
}
interface Meme {}

const adapter = new FileSync<DatabaseSchema>("./db/db.json");
const db = low(adapter);

export const router = express.Router();

router.get("/memes", (req: Request, res: Response) => {
  const memesList = db.get("memes").take(50).value();
  res.status(200).json(memesList);
});

//Tambien se puede hacer asi. De esta forma no hace falta declarar la interface
// router.get("/memes", (req: Request, res: Response) => {
//   const memesList = db.get("memes").value();
//   res.status(200).json(chooseFiftyMemes(memesList, 50));
// });

// function chooseFiftyMemes(memes, n) {
//   return memes.slice(0, n);
// }
