import { app } from "./app";
import request from "supertest";

describe("/api/meme", () => {
  it("Endpoint exist", (done) => {
    request(app).get("/api/meme").expect(200, done);
  });
});
