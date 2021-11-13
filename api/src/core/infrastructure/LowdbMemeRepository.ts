import MemeRepository from "core/domain/model/MemeRepository";
import DatabaseSchema from "core/domain/model/DatabaseSchema";
import low from "lowdb";

export default class LowdbMemeRepository implements MemeRepository {
    database: low.LowdbSync<DatabaseSchema>;
    constructor(database: low.LowdbSync<DatabaseSchema>){
      this.database = database;
    }
    getAll(){
      return this.database.get('memes').take().value();
    }
    getSome(amount: number){
      return this.database.get("memes").chunk(amount).get(3).value();
    }
  }