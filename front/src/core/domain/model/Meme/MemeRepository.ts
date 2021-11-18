import { Meme } from "./Meme";

export interface MemeRepository {
    fechAll: () => Promise<Meme[]>
    fechByTag: (tag: string) => Promise<Meme[]>
}

