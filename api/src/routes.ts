import { Router, Request, Response } from "express";
import { LowdbSync }  from 'lowdb';
import { DatabaseSchema } from "./DatabaseSchema";
export function getRoutes(db: LowdbSync<DatabaseSchema> ):Router {
    const routes = Router();

    routes.get('/memes', function (req: Request, res: Response) {
        res.status(200).json(db.get('memes').take(50).value())
    })
    
    routes.get('/memes/:id', function (req: Request, res: Response) {
        const { params } = req
        const { id } = params
        res.status(200).json(db.get('memes').find({ id: id }).value())
    })

    return routes;
}