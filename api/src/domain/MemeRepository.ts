import { Meme } from "./Meme";

export interface MemeRepository {
    getLastMemes:  () => Meme[]
}