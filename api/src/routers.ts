import express, { Express, Request, Response, Router } from "express";

export const router = express.Router();
router.use((req: Request, res: Response) => {
  res.sendStatus(200);
});
