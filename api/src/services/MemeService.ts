import { MemeRepository } from "../domain/MemeRepository";

export class MemeService {

    memeRepository: MemeRepository;
    
    constructor(memeRepository: MemeRepository) {
        this.memeRepository = memeRepository
    }

    getLastMemes() {
        return this.memeRepository.getLastMemes()
    }
}