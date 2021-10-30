import app from "./app";
import request from "supertest";

describe("/api/memes", () => {
  it("existe el endpoint", (done) => {
    request(app).get("/api/memes").expect(200, done);
  });
  it("devuelve lista", (done) => {
    request(app)
      .get("/api/memes")
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        done();
      });
  });
  it("devuelve 50 elementos", (done) => {
    request(app)
      .get("/api/memes")
      .then((response) => {
        expect(response.body).toHaveLength(50);
        done();
      });
  });
});
