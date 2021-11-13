import { createApp } from "./app";
import request from "supertest";

import low from "lowdb";
import Memory from "lowdb/adapters/Memory";
import DatabaseSchema from "core/domain/model/DatabaseSchema";
import { Express } from "express";

import dbData from "./fixtures/db.json";

describe("/api/memes", () => {
  let app: Express;

  beforeAll(() => {
    const adapter = new Memory<DatabaseSchema>("");
    const db = low(adapter);
    db.defaults(dbData).write();
    app = createApp(db);
  });

  it("existe el endpoint", (done) => {
    request(app).get("/api/memes").expect(200, done);
  });
  it("devuelve lista", (done) => {
    request(app)
      .get("/api/memes")
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        done();
      });
  });
  it("devuelve 50 elementos", (done) => {
    request(app)
      .get("/api/memes")
      .then((response) => {
        expect(response.body).toHaveLength(50);
        done();
      });
  });
});
