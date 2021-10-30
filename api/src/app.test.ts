import { createApp } from "./app";
import request from "supertest";

import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import DatabaseSchema from "DatabaseSchema";
import { Express } from "express";

describe("/api/memes", () => {
  let app: Express;

  beforeAll(() => {
    const adapter = new FileSync<DatabaseSchema>("./database/db.json");
    const db = low(adapter);
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
