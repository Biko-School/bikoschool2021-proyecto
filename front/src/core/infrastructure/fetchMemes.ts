import { Meme } from "./../domain/Meme";
interface MemesObject {
  memes: Meme[];
}
const fetchMemes = async () => {
  const response = await fetch("http://localhost:3010/api/memes");
  const memes: MemesObject = await response.json();

  return memes;
};

export default fetchMemes;
