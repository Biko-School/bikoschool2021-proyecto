import { MemeType } from "./../domain/Meme";

const fetchAllMemes = async () => {
  const response = await fetch("http://localhost:3010/api/memes/all");
  const memes: MemeType[] = await response.json();
  console.log(memes);

  return memes;
};

export default fetchAllMemes;
