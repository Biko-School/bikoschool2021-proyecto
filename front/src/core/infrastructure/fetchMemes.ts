import { MemeType } from "./../domain/Meme";

const fetchMemes = async () => {
  const response = await fetch("http://localhost:3010/api/memes");
  const memes: MemeType[] = await response.json();
  console.log(memes);

  return memes;
};

export default fetchMemes;
