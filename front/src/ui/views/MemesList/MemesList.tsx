import React, { useState, useEffect } from "react";
import { Meme } from "../../../core/domain/model/Meme/Meme";
import { fechAllMemes } from "../../../core/service/Meme";

import lens from "../../../images/Lens.png";
import { ApiMemeRepository } from "../../../core/infrastructure/ApiMemeRepository";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import SectionTitle from "../../components/Title/Title";

export const MemessList: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    (async () => {
      const memeRepository = new ApiMemeRepository();
      setMemes(await fechAllMemes(memeRepository));
    })();
  }, []);

  function onSearchMemes() {
    setFilter("");
    setMemes([]);
  }

  return (
    <div className="App">
      <Header />

      <div className="App__SearchBar">
        <Input
          className="App__SearchBar--bar"
          placeholder="¿Qué quieres buscar? ¡Encuéntralo"
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
        />
        <button className="App__SearchBar--button">
          <img
            src={lens}
            alt="Lens"
            width="25px"
            height="25px"
            onClick={onSearchMemes}
          />
        </button>
      </div>

      <SectionTitle />

      <div className="App__GridGiffs">
        {memes.map((meme) => (
          <img
            className="App__GridGiffs--Giff"
            src={meme.img}
            alt={meme.title}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default MemessList;
