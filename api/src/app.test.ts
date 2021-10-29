import request from "supertest";
import Lowdb from "lowdb";
import { Express } from "express";
import FileSync from "lowdb/adapters/FileSync";
import { DatabaseSchema } from "./DatabaseSchema";
import { createApp } from "./app";

describe("/api/memes", () => {
  let app: Express;

  beforeEach(() => {
    const adapter = new FileSync<DatabaseSchema>("./db/db.json");
    const db = Lowdb(adapter);
    app = createApp(db);
  });

  it("existe el endpoint", (done) => {
    request(app).get("/api/memes").expect(200, done);
  });

  it("devuelve un listado de memes", (done) => {
    request(app)
      .get("/api/memes")
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        done();
      });
  });

  it("devuelve un listado de 50 memes", (done) => {
    request(app)
      .get("/api/memes")
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveLength(50);
        done();
      });
  });
});
