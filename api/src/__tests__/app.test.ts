import { createApp } from "../app";
import request from "supertest";

import low from "lowdb";
import Memory from "lowdb/adapters/Memory";
import DatabaseSchema from "core/domain/model/DatabaseSchema";
import { Express } from "express";

import dbData from "../fixtures/db.json";
import { resolve } from "path/posix";

describe("/api/memes", () => {
  let app: Express;

  beforeAll(() => {
    const adapter = new Memory<DatabaseSchema>("");
    const db = low(adapter);
    db.defaults(dbData).write();
    app = createApp(db);
  });

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

describe("/api/memes con texto de búsqueda", () => {
  let app: Express;

  it("No devuelve resultados si no tiene longitud de 3 caracteres", done => {
    const adapter = new Memory<DatabaseSchema>("");
    const db = low(adapter);
    db.defaults(dbData).write();
    app = createApp(db);

    request(app)
    .get("/api/memes")
    .query({searchText: 'ta'})
    .then((response) => {
      expect(response.body).toHaveLength(0);
      done();
    });
  });

  it("Los memes con etiqueta que contienen 'dancing' son devueltos", done => {
    let memes = [];
    memes.push({ id: 1, tags: ['#dancing'] });
    memes.push({ id: 2, tags: ['#dancingflowers'] });
    memes.push({ id: 3, tags: ['#potatoes'] });

    const adapter = new Memory<DatabaseSchema>("");
    const db = low(adapter);
    db.defaults({ memes }).write();
    app = createApp(db);

    request(app)
    .get("/api/memes")
    .query({searchText: 'dancing'})
    .then((response) => {
      expect(response.body).toHaveLength(2);
      expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({id:1}), expect.objectContaining({id:2})]));      
      done();
    });
  });

  it("Si se busca '    dancing    hila  ' encuentra los memes que tienen alguna etiqueta que sea o contenga los textos 'dancing' o 'hila'", done => {
    let memes = [];
    memes.push({ id: 1, tags: ['#dancing','#potatoes'] });
    memes.push({ id: 2, tags: ['#lemon',"#hilarious"] });
    memes.push({ id: 3, tags: ['#turtle'] });
    memes.push({ id: 4, tags: ['#dancing','#hilariouspanda'] });

    const adapter = new Memory<DatabaseSchema>("");
    const db = low(adapter);
    db.defaults({ memes }).write();
    app = createApp(db);

    request(app)
    .get("/api/memes")
    .query({searchText: '    dancing    hila  '})
    .then((response) => {
      expect(response.body).toHaveLength(3);
      expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({id:1}), expect.objectContaining({id:2}), expect.objectContaining({id:4})]));      
      done();
    });
  });

  it("Si se busca 'dAnCinG' devulve los memes que tienen una etiqueta que contiene o es 'dancing' ignorando mayúsculas", done => {
    let memes = [];
    memes.push({ id: 1, tags: ['#DancinG'] });
    memes.push({ id: 2, tags: ['#daNcIngflowers'] });
    memes.push({ id: 3, tags: ['#potatoes'] });

    const adapter = new Memory<DatabaseSchema>("");
    const db = low(adapter);
    db.defaults({ memes }).write();
    app = createApp(db);

    request(app)
    .get("/api/memes")
    .query({searchText: 'dAnCinG'})
    .then((response) => {
      expect(response.body).toHaveLength(2);
      expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({id:1}), expect.objectContaining({id:2})]));      
      done();
    });
  });
});

