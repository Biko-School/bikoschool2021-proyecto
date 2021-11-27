import { DataBaseSchema } from "DataBaseSchema";
import http, { Server } from "http";
import Lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { createApp } from "./app";

const database = "./db/db.json";

const adapter = new FileSync<DataBaseSchema>(database);
const db = Lowdb(adapter);
const app = createApp(db);

const server: Server = http.createServer(app);

const port: string = process.env.PORT || "3001";

// Assigns setting name to value
// http://expressjs.com/es/api.html#app.set
app.set("port", port);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  switch (error.code) {
    case "EACCES":
      console.error(`${port} requires elevated privileges`);
      process.exit(1);
    case "EADDRINUSE":
      console.error(`${port} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  console.log(`Listening on ${port}`);
}
