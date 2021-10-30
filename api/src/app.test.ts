import { app } from "./app";
import request from "supertest";
import { response } from "express";

describe("/api/memes", () => {
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
