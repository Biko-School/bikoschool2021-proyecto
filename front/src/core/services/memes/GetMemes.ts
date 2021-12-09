import MemeRepository from "../../domain/model/MemeRepository";

export default async function getMemes(
  memeRepository: MemeRepository,
  searchText: string = ""
) {
  return await memeRepository.getMemes(searchText);
}
