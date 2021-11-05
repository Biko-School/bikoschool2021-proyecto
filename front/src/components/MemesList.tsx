import React, { useState, useEffect } from "react";
import { api } from "../api";
import logo from "../images/Logo.png";
import arrow from "../images/Arrow.png";
import lens from "../images/Lens.png";

export interface Meme {
  title: string;
  tags: string[];
  date: Date;
  img: string;
}

function sortMemeByDate(memes: Meme[]) {
  return memes.sort((a, b) => (a.date < b.date ? -1 : 1));
}

// function chooseFiftyMemes(memes: Meme[], n: number) {
//   return memes.slice(0, n);
// }

function memesMapping(memesJSON: any) {
  const memesData = memesJSON.map((meme: any) => {
    return {
      titles: meme.title,
      tags: meme.tags,
      date: meme.import_datetime,
      img: meme.images.original.url,
    };
  });
  return memesData;
}

export const MemessList: React.FC = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const memesJSON = await api.memes();
      const memesJSONmapped = memesMapping(memesJSON);
      const memesSorted = sortMemeByDate(memesJSONmapped);
      setMemes(memesSorted);
    })();
  }, []);

  return (
    <div className="App">
      <div className="App__AppTitle">
        <img src={logo} alt="logo" width="55.88" height="61.75" />
        <div className="App__AppTitle--Title">GIFFAFFINITY</div>
      </div>
      <div className="App__SearchBar">
        <input
          className="App__SearchBar--bar"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <div className="App__SearchBar--button">
          <img src={lens} alt="Lens" width="25px" height="25px" />
        </div>
      </div>
      <div className="App__SectionTitle">
        <img src={arrow} alt="logo" width="25" height="25" />
        <div className="App__SectionTitle--Title">
          Los giffs más trendings del momento
        </div>
      </div>
      <div className="App__GridGifs">
        {memes.map((meme) => (
          <div key={meme.img}>
            <img src={meme.img} alt={meme.title} width="25%" height="25%"></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemessList;
