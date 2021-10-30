import { app } from "./app";
import request from "supertest";

describe("/api/memes", () => {
  it("Endpoint exist", (done) => {
    request(app).get("/api/memes").expect(200, done);
  });
});
