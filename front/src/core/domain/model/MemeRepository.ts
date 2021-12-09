import Meme from "./Meme";

export default interface MemeRepository {
  getMemes(searchText: string): Promise<Meme[]>;
}
