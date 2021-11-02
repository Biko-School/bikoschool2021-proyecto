import { createApp } from "./app";
import request from "supertest";
import { response } from "express";
import { doesNotMatch } from "assert";
import FileSync from "lowdb/adapters/FileSync";
import { DatabaseSchema } from "DatabaseSchema";
import Lowdb from "lowdb";

const adapter = new FileSync<DatabaseSchema>("./db/db.json");
const db = Lowdb(adapter);

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
