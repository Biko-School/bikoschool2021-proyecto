import { Meme } from "../domain/Meme";
import { MemeRepository }  from "../domain/MemeRepository";

export class ApiMemesRepository implements MemeRepository {
    
    async getMemes():Promise<Meme[]>  {
        const response = await fetch('http://localhost:8000/api/memes')
        return response.json()
    }
}