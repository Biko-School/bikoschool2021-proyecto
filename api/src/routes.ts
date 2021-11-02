import { Router } from "express";
       
export const routes = Router();
    
routes.get("/memes", (req, res) => {
    const db = req.context.db;
    const memes = db.get("memes").take(50).value();
    res.status(200).json(memes);
});