import { Meme } from 'core/domain/model/Meme/Meme';

export const FilterMemes =
  () =>
  (filter: string, memes: Meme[]): Meme[] => {
    const formatedFilter: string = filter
      .split(' ')
      .filter((substring: string) => substring)
      .join(' ')
      .toLowerCase();

    let filteredMemes = memes.filter((meme: Meme) => {
      return (
        formatedFilter.length < 3 ||
        meme.tags.some((tag: string) =>
          tag.toLowerCase().includes(formatedFilter)
        )
      );
    });

    if (formatedFilter.length > 3) {
      filteredMemes = filteredMemes.sort((meme1: Meme, meme2: Meme) => {
        return meme1.time < meme2.time ? 1 : meme2.time < meme1.time ? -1 : 0;
      });
    }

    return filteredMemes;
  };
