import { MemeType } from "../domain/MemeType";
import filterMemesByName from "./filterMemesByName";
import filterMemesByTag from "./filterMemesByTag";

const filterMemesByNameOrTags = (searchingText: string, memes: MemeType[]) => {
  const filteredMemesByName = filterMemesByName(searchingText, memes);
  const filteredMemesByTag = filterMemesByTag(searchingText, memes);

  const filteredMemesByNameOrTag: MemeType[] = [
    ...filteredMemesByName,
    ...filteredMemesByTag,
  ];
  const uniqueMemes = Array.from(new Set(filteredMemesByNameOrTag));
  return uniqueMemes;
};

export default filterMemesByNameOrTags;
