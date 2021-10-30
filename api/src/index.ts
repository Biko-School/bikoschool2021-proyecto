import http, { Server } from 'http';
import { NextFunction, Request, Response } from 'express';
import { nextTick } from 'process';
import { getApp } from './app';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { DatabaseSchema } from './DatabaseSchema';

const adapter = new FileSync<DatabaseSchema>('./db/db.json');
const db = low(adapter);

const port: string = process.env.PORT || '3000';

const app = getApp(db);

// Assigns setting name to value
// http://expressjs.com/es/api.html#app.set
app.set('port', port);

const server: Server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`${port} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${port} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  console.log(`Listening on ${port}`);
}
