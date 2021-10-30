import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import { getRoutes } from "./routes"



export const createApp = (db) => {
    const app: Express = express();

    // Shows request log on terminal
    // https://github.com/expressjs/morgan
    app.use(morgan("dev"));
    
    // Parses incoming requests with JSON payloads
    // http://expressjs.com/es/api.html#express.json
    app.use(express.json());
    
    // Parses incoming requests with urlencoded payloads
    // http://expressjs.com/es/api.html#express.urlencoded
    app.use(express.urlencoded({ extended: false }));
    
    
    app.use("/api", getRoutes(db))

    return app
}