import express, { Express, Request, Response, Router } from "express";

export const router = express.Router();

router.get("/memes", (req: Request, res: Response) => {
  res.status(200).json([]);
});
