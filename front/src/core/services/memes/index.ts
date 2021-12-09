import Meme from "../../domain/model/Meme";
import MemeRepository from "../../domain/model/MemeRepository";
import getMemes from "./GetMemes";

export default class MemeService {
  constructor(private memeRepository: MemeRepository) {}

  getMemes(searchText: string = ""): Promise<Meme[]> {
    return getMemes(this.memeRepository, searchText);
  }
}
