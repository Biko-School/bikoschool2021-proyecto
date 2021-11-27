import { Meme } from "../domain/model/Meme/Meme";
import { MemeDTO } from "../domain/model/Meme/MemeDTO";
import { MemeRepository } from "../domain/model/Meme/MemeRepository";
import { api } from "./api/api";
import { memesMapper } from "./serialization/memesMapper";

export class ApiMemeRepository implements MemeRepository {
  async fechAll(): Promise<Meme[]> {
    const memesDTO: MemeDTO[] = await api.memes();
    return memesMapper(memesDTO);
  }
  async fechByTag(tag: string): Promise<Meme[]> {
    const memesDTO: MemeDTO[] = await api.memesByTag(tag);
    return memesMapper(memesDTO);
  }
}
