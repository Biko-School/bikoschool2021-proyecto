import { app } from "./app";
import request from "supertest";

describe("/api/memes", () => {
  it("Existe el endpoint", (done) => {
    request(app).get("/api/memes").expect(200, done);
  });

  it("Error de conexion", (done) => {
    request(app).get("/api/memes/error").expect(400, done);
  });

  it("El endpoint devuelve una lista de 50 memes", (done) => {
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
