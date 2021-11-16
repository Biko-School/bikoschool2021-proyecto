import React, { useEffect, useState } from "react";
import { MemeType } from "../core/domain/MemeType";
import fetchAllMemes from "../core/infrastructure/fetchMemes";
import Meme from "./components/Meme/Meme";

function App() {
  const [memesData, setMemesData] = useState<MemeType[]>([]);

  useEffect(() => {
    fetchAllMemes().then((response) => {
      setMemesData(response);
    });
  }, []);

  const first50Memes: MemeType[] = memesData.slice(0, 50);

  return (
    <div className="app_container">
      <div className="header">
        <img src="/img/GuifaffinityLogo.svg" alt="Guifaffinity logo" />
        <h1 className="header_title">GUIFAFFINITY</h1>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="¿Que quieres buscar? ¡Encuentralo!"
          className="input_search"
        />
        <div className="search_icon">
          <img src="/img/searchIcon.svg" alt="Search" />
        </div>
      </div>

      <div className="subtitle">
        <img src="/img/arrow.svg" alt="Search" className="subtitle_logo" />
        <div className="subtitle_text">Los guif más trendings del momento</div>
      </div>

      <div className="memes_grid">
        {first50Memes.length === 0 && <div>Loading...</div>}

        {first50Memes.length !== 0 &&
          first50Memes.map((result) => (
            <Meme
              title={result.title}
              id={result.id}
              imageUrl={result.images.small.url}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
