import { MemeType } from "../domain/MemeType";
const filterMemesByName = (searchingText: string, memes: MemeType[]) => {
  const filteredMemes = memes.filter((meme) =>
    meme.title.toLowerCase().includes(searchingText.toLowerCase())
  );
  return filteredMemes;
};
export default filterMemesByName;
