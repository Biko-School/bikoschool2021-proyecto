import Meme from "./meme";

export default interface MemeRepository {
    getAll(): Meme[];
    getSome(amount:number): Meme[]
}