import { Router } from "express"

export const routes = Router()

routes.get('/memes', function (req, res) {
    res.status(200).json([]);
});

export default routes;