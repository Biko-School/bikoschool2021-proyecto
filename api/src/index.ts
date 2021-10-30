import http, { Server } from "http";
import { app, port } from "./app";

const server: Server = http.createServer(app);

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
