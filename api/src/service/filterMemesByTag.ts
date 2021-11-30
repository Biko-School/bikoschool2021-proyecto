import { MemeType } from "../domain/MemeType";

export const filterMemesByTag = (searchingText: string, memes: MemeType[]) => {
  const filteredMemes = memes.filter((meme) => {
    let counter: number = 0;
    meme.tags.forEach((tag) => {
      if (tag.toLowerCase().includes(searchingText.toLowerCase())) {
        counter++;
      }
    });
    return counter > 0;

    // return meme.tags.indexOf(`#${searchingText}`) > -1;
  });

  return filteredMemes;
};

export default filterMemesByTag;
