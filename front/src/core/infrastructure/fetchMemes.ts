import { MemeType } from "./../domain/Meme";

const fetchMemes = async (url: string) => {
  const response = await fetch(url);
  const memes: MemeType[] = await response.json();
  console.log(memes);

  return memes;
};

export default fetchMemes;
