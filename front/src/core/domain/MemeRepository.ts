import { Meme } from "./meme";

export default interface MemeRepository {
  filePath: string;

  getMemes(filePath: string): Promise<Meme[]>;

  getMeme(filePath: string): Promise<Meme>;
}
