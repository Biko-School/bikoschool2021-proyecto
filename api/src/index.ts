import { DatabaseSchema } from "DatabaseSchema";
import http, { Server } from "http";
import Lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { createApp, port } from "./app";

const adapter = new FileSync<DatabaseSchema>("./db/db.json");
const db = Lowdb(adapter);

const server: Server = http.createServer(createApp(db));

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
