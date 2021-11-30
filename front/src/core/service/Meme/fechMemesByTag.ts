import { Meme } from "../../domain/model/Meme/Meme";
import { MemeRepository } from "../../domain/model/Meme/MemeRepository";

export async function fechMemesByTag(
  memeRepository: MemeRepository,
  filter: string
): Promise<Meme[]> {
  return await memeRepository.fechByTag(filter);
}
