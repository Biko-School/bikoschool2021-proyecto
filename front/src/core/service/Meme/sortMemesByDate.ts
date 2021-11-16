import { Meme } from "../../domain/model/Meme/Meme";

export function sortMemeByDate(memes: Meme[]): Meme[] {
  return memes.sort((a, b) => (a.date < b.date ? -1 : 1));
}
