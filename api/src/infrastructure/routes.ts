import { Router } from "express";
import filterMemesByNameOrTags from "../service/filterMemesByNameOrTag";
import cleanSearchText from "../service/cleanSearchText";

const cors = require("cors");

export const routes = Router();
routes.get("/memes", cors(), (req, res) => {
  const db = req.context.db;
  const memes = db.get("memes").take(50).value();
  res.status(200).json(memes);
});
routes.get("/memes/all", cors(), (req, res) => {
  const db = req.context.db;
  const memes = db.get("memes").value();
  res.status(200).json(memes);
});
routes.get("/memes/filter/:search", cors(), (req, res) => {
  const search = cleanSearchText(req.params.search);
  const db = req.context.db;
  // const memes = db.get("memes").find({ title: "Dance Dancing GIF by MOODMAN" });
  const memes = db.get("memes").value();
  const filteredMemes = filterMemesByNameOrTags(search, memes);
  res.status(200).json(filteredMemes);
});
