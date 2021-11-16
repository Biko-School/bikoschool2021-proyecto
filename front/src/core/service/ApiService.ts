import { api } from "../infrastructure/Api";

export const fetchAllMemes = async () => {
  const rawMemes = await api.memes();
  return rawMemes;
};

export default fetchAllMemes;
