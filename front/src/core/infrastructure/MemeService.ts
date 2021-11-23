import MemeRepository from "../domain/model/MemeRepository";
import MemeService from "../services/memes";
import ApiMemeRepository from "./api/ApiMemeRepository";

const memeRepository: MemeRepository = new ApiMemeRepository('/api');

export default new MemeService(memeRepository);