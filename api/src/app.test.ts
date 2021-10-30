import { app } from "./app";
import request from "supertest";

describe("check api meme", () => {
  it("existe el endpoint", (done) => {
    request(app).get("/api/meme").expect(200, done);
  });
});
