import { Router, Request, Response } from "express";
import low  from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { DatabaseSchema } from "./DatabaseSchema";

export const routes = Router();

const adapter = new FileSync<DatabaseSchema>('./material/db.json');
const db = low(adapter);

routes.get('/memes', function (req: Request, res: Response) {
    res.status(200).json(db.get('memes').take(50).value())
})

routes.get('/memes/:id', function (req: Request, res: Response) {
    const { params } = req
    const { id } = params
    res.status(200).json(db.get('memes').find({ id: id }).value())
})