import { Router } from "express";
import low from "lowdb";
import { DatabaseSchema } from "./DatabaseSchema";

export function createRoutes(db: low.LowdbSync<DatabaseSchema>) {
  const routes = Router();

  routes.get("/memes", (req, res) => {
    const memes = db.get("memes").take(50).value();

    res.status(200).json(memes);
  });

  return routes;
}
