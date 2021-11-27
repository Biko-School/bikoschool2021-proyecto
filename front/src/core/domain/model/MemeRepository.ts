import Meme from "./Meme";

export default interface MemeRepository {
  getMemes(): Promise<Meme[]>;
}
