import MemeRepository from "core/domain/model/MemeRepository";
import DatabaseSchema from "core/domain/model/DatabaseSchema";
import low from "lowdb";
import { response } from "express";

export default class LowdbMemeRepository implements MemeRepository {
    database: low.LowdbSync<DatabaseSchema>;
    constructor(database: low.LowdbSync<DatabaseSchema>){
      this.database = database;
    }
    getAll(){
      return this.database.get('memes').take().value();
    }
    getSome(amount: number, page?:number){
      const chunkToGet = (page ?? 1) - 1;
      return this.database.get("memes").chunk(amount).get(chunkToGet).value();      
    }
    getSomeByFilter(amount:number, page?:number, searchText?:string){
      const chunkToGet = (page ?? 1) - 1;
      if(!searchText || searchText.length < 3)
        return [];
      return this.database.get("memes").chunk(amount).get(chunkToGet).value();      
    };
  }