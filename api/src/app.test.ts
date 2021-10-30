import app from "./app";
import request from "supertest";

describe("/api/memes", () => {
  it("existe el endpoint", (done) => {
    request(app).get("/api/memes").expect(200, done);
  });
  it("Endpoint devuelve lista", (done) => {
    request(app).get("/api/memes").expect([], done);
  });
});
