import MemeRepository from "core/domain/model/MemeRepository";

export default function getSomeMemesByFilter (memeRepository: MemeRepository, amount: number, filter: string){
    return memeRepository.getSomeByFilter(amount,null,filter);
}