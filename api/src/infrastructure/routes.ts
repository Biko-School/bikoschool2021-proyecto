import { Router } from "express";

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
