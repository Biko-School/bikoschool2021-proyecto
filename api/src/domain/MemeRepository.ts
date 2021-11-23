import { Meme } from "./Meme";

export interface MemeRepository {
    getLastMemes:  () => Meme[]
    getFilteredMemes: (filteredValue:string) => Meme[]
}