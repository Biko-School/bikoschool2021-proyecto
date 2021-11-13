import http, { Server } from "http";
import { createApp } from "./app";

import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import DatabaseSchema from "core/domain/model/DatabaseSchema";

const adapter = new FileSync<DatabaseSchema>("./database/db.json");
const db = low(adapter);

const port: string = process.env.PORT || "3001";
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
