import { createApp } from "../app";
import request from "supertest";

import low from "lowdb";
import Memory from "lowdb/adapters/Memory";
import DatabaseSchema from "core/domain/model/DatabaseSchema";
import { Express } from "express";

import dbData from "../fixtures/db.json";
import { resolve } from "path/posix";

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

describe("/api/memes con texto de búsqueda", () => {
  let app: Express;

  it("No devuelve resultados si no tiene longitud de 3 caracteres", done => {
    const adapter = new Memory<DatabaseSchema>("");
    const db = low(adapter);
    db.defaults(dbData).write();
    app = createApp(db);

    request(app)
    .get("/api/memes")
    .query({searchText: 'ta'})
    .then((response) => {
      expect(response.body).toHaveLength(0);
      done();
    });
  });
});

