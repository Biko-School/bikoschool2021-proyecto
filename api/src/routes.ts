import { Router, Request, Response } from "express";

export const routes = Router();

routes.get('/memes', function (req: Request, res: Response) {
    res.status(200).send(['mundo', 'flor', 'piedra'])
})