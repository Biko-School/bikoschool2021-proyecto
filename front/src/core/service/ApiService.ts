import { api } from "../infrastructure/Api";

export const fetchAllMemes = async () => {
  const rawMemes = await api.getAllMemes();
  return rawMemes;
};

export default fetchAllMemes;
