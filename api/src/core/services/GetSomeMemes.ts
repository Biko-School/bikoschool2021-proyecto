import MemeRepository from "core/domain/model/MemeRepository";

export default function getSomeMemes (memeRepository: MemeRepository, amount: number){
    return memeRepository.getSome(amount);
}