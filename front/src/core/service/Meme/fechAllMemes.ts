import { Meme } from "../../domain/model/Meme/Meme";
import { MemeRepository } from "../../domain/model/Meme/MemeRepository";

export async function fechAllMemes(memeRepository: MemeRepository):Promise<Meme[]> { 
    //const memesSorted = sortMemeByDate(memesMapped)
    return await memeRepository.fechAll()
}

