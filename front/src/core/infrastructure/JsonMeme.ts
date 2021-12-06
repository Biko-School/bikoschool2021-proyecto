import MemeRepository from "../domain/MemeRepository";
import { Meme } from "../domain/meme";

export default class JsonMeme implements MemeRepository {
  filePath: string;

  getMemes(filePath: string): Promise<Meme[]> {
    throw new Error("Method not implemented.");
  }

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  async getMeme(): Promise<Meme> {
    const initialData = await fetch(this.filePath);

    const meme: Meme = await initialData.json();

    /*const memes = data.map((meme: Meme[]) => {
            new Meme(meme._id, meme.title, meme.image, meme.tags))
            return memes
        
        // añadir estructura de la api ;*/
    return meme;
  }
}
