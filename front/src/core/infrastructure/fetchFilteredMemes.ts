import { MemeType } from "../domain/MemeType";

const fetchFilteredMemes = async (searchText: string) => {
  if (searchText === "") return [];
  const uriSearchText = encodeURIComponent(searchText);
  const response = await fetch(
    `http://localhost:3010/api/memes/filter/${uriSearchText}`
  );
  const memes: MemeType[] = await response.json();

  return memes;
};

export default fetchFilteredMemes;
