import { app } from "./app";
import request from "supertest";
import { response } from "express";
import { doesNotMatch } from "assert";

describe("check api meme", () => {
  it("existe el endpoint", (done) => {
    request(app).get("/api/meme").expect(200, done);
  });

  it("send memes list", (done) => {
    request(app)
      .get("/api/meme")
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        done();
      });
  });
  it("check list for 50 memes", (done) => {
    request(app)
      .get("/api/meme")
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body).toHaveLength(50);
        done();
      });
  });
});
