import MemeRepository from "../../domain/model/MemeRepository";

export default async function getMemes(memeRepository: MemeRepository) {
    return await memeRepository.getMemes();
}