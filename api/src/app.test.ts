import { createApp } from "./app";
import request from "supertest";
import Memory from "lowdb/adapters/Memory";
import dbData from "./fixtures/db.json";
import { DataBaseSchema } from "DataBaseSchema";
import Lowdb from "lowdb";

describe("/api/memes", () => {
  let app;

  beforeEach(() => {
    const adapter = new Memory<DataBaseSchema>("");
    const db = Lowdb(adapter);

    db.defaults(dbData).write();

    app = createApp(db);
  });

  it("existe el endpoint", (done) => {
    request(app).get("/api/memes").expect(200, done);
  });

  it("devuelve un listado de memes", (done) => {
    request(app)
      .get("/api/memes")
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        done();
      });
  });

  it("devuelve un listado de 50 memes", (done) => {
    request(app)
      .get("/api/memes")
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body).toHaveLength(50);
        done();
      });
  });

  it("api devuelve titulo e imagen", (done) => {
    request(app)
      .get("/api/memes")
      .expect(200)
      .then((response) => {
        expect(response.body[0]).toHaveProperty("title"); //toBeTruthy()
        expect(response.body[0]).toHaveProperty("giphyUrl");
        /**
                 ¿Como se puede hacer un test que chequee que solo están esas dos propiedades?
                 ¿Como configuramos el API para que solo devuelva las propiedades que queremos?
                */
        done();
      });
  });
});
