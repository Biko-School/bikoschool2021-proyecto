import { app } from "./app";
import { Router } from "express"

export const routes = Router()

routes.get('/memes', function (req, res) {
    res.sendStatus(200);
});

export default routes;