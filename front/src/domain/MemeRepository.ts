import { Meme } from "./Meme";

export interface MemeRepository {
    getMemes:  () => Promise<Meme[]>
}