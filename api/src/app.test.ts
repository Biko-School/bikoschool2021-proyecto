import request from "supertest";
import Lowdb from "lowdb";
import { Express } from "express";
import Memory from "lowdb/adapters/Memory";
import { DatabaseSchema } from "./DatabaseSchema";
import { createApp } from "./app";
import dbData from "./fixtures/db.json";

describe("/api/memes.json", () => {
  let app: Express;

  beforeEach(() => {
    const adapter = new Memory<DatabaseSchema>("");
    const db = Lowdb(adapter);

    db.defaults(dbData).write();

    app = createApp(db);
  });

  it("existe el endpoint", (done) => {
    request(app).get("/api/memes.json").expect(200, done);
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
      .get("/api/memes.json")
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveLength(50);
        done();
      });
  });
});
