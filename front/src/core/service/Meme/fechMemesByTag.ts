import { Meme } from "../../domain/model/Meme/Meme";
import { MemeRepository } from "../../domain/model/Meme/MemeRepository";

export async function fechAllMemes(
  memeRepository: MemeRepository
): Promise<Meme[]> {
  return await memeRepository.fechAll();
}
