import { MemeType } from "../domain/MemeType";

const fetchFilteredMemes = async (searchText: string) => {
  if (searchText === "") return [];
  const response = await fetch(
    `http://localhost:3010/api/memes/filter/${searchText}`
  );
  const memes: MemeType[] = await response.json();

  return memes;
};

export default fetchFilteredMemes;
