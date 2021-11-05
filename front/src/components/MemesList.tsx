import React, { useState, useEffect } from "react";
import { api } from "../api";

export interface Meme {
  title: string;
  tags: string[];
  date: Date;
  img: string;
}

export const MemessList: React.FC = () => {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    (async () => {
      const memesJSON = await api.memes();
      setMemes(memesJSON);
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
