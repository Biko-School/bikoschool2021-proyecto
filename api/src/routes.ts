import express, { Express, Request, Response, Router } from "express";
import low from "lowdb";
import DatabaseSchema from "DatabaseSchema";

export const createRoutes = (db: low.LowdbSync<DatabaseSchema>) => {
  const routes = express.Router();
  routes.get("/memes", (req: Request, res: Response) => {
    res.status(200).json(db.get("memes").take(50).value());
  });
  return routes;
};
