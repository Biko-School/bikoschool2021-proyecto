import { createApp } from "./app";
import request from "supertest";
import { response } from "express";
import { doesNotMatch } from "assert";
import Memory from "lowdb/adapters/Memory";
import { DatabaseSchema } from "DatabaseSchema";
import Lowdb from "lowdb";
import dbData from "./fixture/db.json";

const adapter = new Memory<DatabaseSchema>("");
const db = Lowdb(adapter);
db.defaults(dbData).write();

describe("check api meme", () => {
  it("existe el endpoint", (done) => {
    request(createApp(db)).get("/api/meme").expect(200, done);
  });

  it("send memes list", (done) => {
    request(createApp(db))
      .get("/api/meme")
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        done();
      });
  });
  it("check list for 50 memes", (done) => {
    request(createApp(db))
      .get("/api/meme")
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body).toHaveLength(50);
        done();
      });
  });
});
