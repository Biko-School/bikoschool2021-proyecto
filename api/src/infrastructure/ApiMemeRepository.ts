import { DatabaseSchema } from "domain/DatabaseSchema";
import { LowdbSync } from "lowdb";
import { Meme } from "../domain/Meme";
import { MemeRepository }  from "../domain/MemeRepository";

export class ApiMemeRepository implements MemeRepository {

    private db:LowdbSync<DatabaseSchema>

    constructor(db: LowdbSync<DatabaseSchema>) {
        this.db = db
    }
    
    getLastMemes():Meme[]  {
        const memes = this.db.get('memes').sortBy('import_datetime').reverse().take(50).value()
        return  memes.map(({id, images, tags, title }) => ({ id, name: title, tags, image: images.small.url}));
    }

    getFilteredMemes(filteredValue:string):Meme[]{
        const memes = this.db.get('memes').sortBy('import_datetime').reverse().filter(({ tags }) => tags.some(tag => tag.includes(filteredValue))).value()
        return memes.map(({id, images, tags, title }) => ({ id, name: title, tags, image: images.small.url}));       
    }
}