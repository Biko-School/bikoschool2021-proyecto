import { Router } from "express";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { DbSchema } from "./DbSchema";

export function getRoutes(db: low.LowdbSync<DbSchema>) {
  const routes = Router();
  routes.get("/memes", (req, res) => {
    const memes = db.get("memes").take(50).value();
    res.status(200).json(memes);
  });
  return routes;
}
