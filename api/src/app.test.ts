import { app } from "./app";
import request from "supertest";
import { response } from "express";

describe("/api/memes", () => {
  it("Endpoint exist", (done) => {
    request(app).get("/api/memes").expect(200, done);
  });
  it("should be array", (done) => {
    request(app)
      .get("/api/memes")
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        done();
      });
  });
});
