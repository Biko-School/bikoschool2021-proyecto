import MemeRepository from "../domain/MemeRepository";
import { Meme } from "../domain/meme";

export default class JsonMemes implements MemeRepository {
  filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  async getMemes(): Promise<Meme[]> {
    const initialData = await fetch(this.filePath);

    const memes: Meme[] = await initialData.json();

    /*const memes = data.map((meme: Meme[]) => {
            new Meme(meme._id, meme.title, meme.image, meme.tags))
            return memes
        
        // añadir estructura de la api ;*/
    return memes;
  }
}
