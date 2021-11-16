import React, { useState, useEffect } from "react";
import { Meme } from "../../../core/domain/model/Meme/Meme";
import { fechAllMemes } from "../../../core/service/Meme";
import logo from "../../../images/Logo.png";
import arrow from "../../../images/Arrow.png";
import lens from "../../../images/Lens.png";
import { ApiMemeRepository } from "../../../core/infrastructure/ApiMemeRepository";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";

export const MemessList: React.FC = () => {
  const [filter, setFilter] = useState('')
  const [memes, setMemes] = useState<Meme[]>([]);  

  useEffect(() => {
    (async () => {
      const memeRepository = new ApiMemeRepository()
      setMemes(await fechAllMemes(memeRepository))
    })();
  }, []);

  function onSearchMemes() {
    setFilter('')
    setMemes([])
  }

  return (
    <div className="App">
      <Title 
        className="App__AppTitle"
        src={logo} alt="logo" width="55.88" height="61.75"
        textClassName= "App__AppTitle--Title" textChildren = "GIFFAFFINITY"
      />

      <div className="App__SearchBar">
        <Input 
          className="App__SearchBar--bar"
          placeholder="¿Qué quieres buscar? ¡Encuéntralo"
          onChange={event => setFilter(event.target.value)} 
          value={filter}
        /> 
        <button className="App__SearchBar--button">
          <img src={lens} alt="Lens" width="25px" height="25px" onClick={onSearchMemes}/>
        </button>
      </div>

      <Title 
        className="App__SectionTitle"
        src={arrow} alt="logo" width="20" height="25"
        textClassName= "App__SectionTitle--Title" textChildren = "Los giffs más trendings del momento"
      />

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
