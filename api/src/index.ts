import http, { Server } from "http";
import express, { Express, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { nextTick } from "process";

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

//// ROUTES ////

// Check session
const checkSession = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (true) { // ## TODO: Check Session
    console.log('checkSession')
    next()
  } else {
    res.sendStatus(401);
  }
};

app.use("/users", checkSession)

// Users CRUD
app.get("/users", (req: Request, res: Response) => {
  res.status(200).json([{ data: "Endika" },{ data: "Carlos" }]); // Status 200 default
});

app.get("/users/:id", (req: Request, res: Response) => {
  res.json(`User with ID ${req.params.id}: Endika`);
});

app.post("/users", (req: Request, res: Response) => {
  console.log('Create user')
  res.json(req.body);
});

app.put("/users", (req: Request, res: Response) => {
  console.log('Update user')
  res.json(req.body);
});

app.delete("/users", (req: Request, res: Response) => {
  console.log('Delete user')
  res.json(req.body);
});

app.get("/errors/users", (req: Request, res: Response, next: NextFunction) => {
  next(new Error('Users Error'))
});

// Routes every path
// http://expressjs.com/es/api.html#app.use
//app.use("/", (req: Request, res: Response) => {
//  res.json({ data: "index!" });
//});

// 404
app.use('*', (req: Request, res: Response) => {
  res.json('no-controller');
});

const port: string = process.env.PORT || "3000";

// Assigns setting name to value
// http://expressjs.com/es/api.html#app.set
app.set("port", port);

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
