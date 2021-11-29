import { useEffect, useState } from "react";
import { Meme } from "../domain/meme";
import JsonMemes from "../infrastructure/JsonMemes";

let memesRepository: Meme[];
//{'title': '', 'images': {'original': {'url': ''}}}
function MemeList() {
  let memeRepo = new JsonMemes("http://localhost:3001/api/memes");

  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    async function getData() {
      memesRepository = await memeRepo.getMemes();
      setMemes(memesRepository);
    }
    getData();
    console.log(memes);
  }, []);

  return memes;
}

export default MemeList;
