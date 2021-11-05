import React, { useState, useEffect } from "react";
import { api } from "../api";

export interface Meme {
  title: string;
  tags: string[];
  date: Date;
  img: string;
}

function sortMemeByDate(memes: Meme[]) {
  return memes.sort((a, b) => (a.date < b.date ? -1 : 1));
}

function chooseFiftyMemes(memes: Meme[], n: number) {
  return memes.slice(0, n);
}

function memesMapping(memesJSON:any) {
  const memesData = memesJSON.map((meme:any) => {
    return {
      titles : meme.title,
      tags : meme.tags,
      date : meme.import_datetime,
      img : meme.images.original.url 
    }
  })
  return memesData
}

export const MemessList: React.FC = () => {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    (async () => {
      const memesJSON = await api.memes();
      const memesJSONmapped = memesMapping(memesJSON)
      const memesSorted = sortMemeByDate(memesJSONmapped);
      const fiftyMemesSorted = chooseFiftyMemes(memesSorted, 50);
      setMemes(fiftyMemesSorted);
    })();
  }, []);

  return (
    <div className="App">
      <div>
        {memes.map((meme) => (
          <div key={meme.img}>
            <img src={meme.img} alt={meme.title} width="50%" height="50%"></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemessList;
