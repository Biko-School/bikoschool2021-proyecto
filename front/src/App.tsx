import React, { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import Meme from "./core/domain/model/Meme";
import MemeService from "./core/infrastructure/MemeService";

function App() {
  const [memes, setMemes] = useState(new Array<Meme>());
  const [filteredMemes, setFilteredMemes] = useState(new Array<Meme>());

  //Ejecuta petición API despues de cada renderizado
  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    let newMemes = await MemeService.getMemes();
    setMemes(newMemes);
    setFilteredMemes(newMemes);
  };

  const filterMemes = (event: ChangeEvent<HTMLInputElement>) => {
    const searchText = event?.target?.value?.trim().toLowerCase();
      const newFilteredMemes = memes.filter(meme => meme.title.toLowerCase().includes(searchText));
      setFilteredMemes(newFilteredMemes);

  }
  
  return (
    <div>
      <input type="text" placeholder="¿Que quieres buscar? ¡Encuentralo!" onChange={filterMemes}></input>
      <div className="gif__grid">
        {filteredMemes.map((meme, index) => (
          <div key={index}>
            <img className="gif__card" alt={meme.title} src={meme.images.original.url} />
            <p>{ meme.title }</p>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default App;
