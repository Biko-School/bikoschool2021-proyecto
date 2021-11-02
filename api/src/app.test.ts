import { createApp } from "./app";
import request from "supertest";
import { response } from "express";
import low from "lowdb";
import Memory from "lowdb/adapters/Memory";
import { DbSchema } from "./DbSchema";
import dbData from "./fixtures/db.json";

describe("/api/memes", () => {
  let app;

  beforeEach(() => {
    const adapter = new Memory<DbSchema>("");
    const db = low(adapter);

    db.defaults(dbData).write();

    app = createApp(db);
  });

  it("should be array of 50", (done) => {
    request(app)
      .get("/api/memes")
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body).toHaveLength(50);
        done();
      });
  });
});
