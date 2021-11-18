import Meme from "./Meme"

export default interface MemeRepository{

    getAllMemes() : Promise<Meme[]>

    

}