import { MemeType } from "../domain/MemeType";

export const filterMemesByTag = (searchingText: string, memes: MemeType[]) => {
  const filteredMemes = memes.filter((meme) => {
    return meme.tags.indexOf(`#${searchingText}`) > -1;
  });

  return filteredMemes;
};

export default filterMemesByTag;
