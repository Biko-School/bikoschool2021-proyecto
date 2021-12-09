import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import Meme from "./core/domain/model/Meme";
import MemeService from "./core/infrastructure/MemeService";

function App() {
  const [memes, setMemes] = useState(new Array<Meme>());
  let memeSearchTimeout: NodeJS.Timeout | null = null;

  //Ejecuta petición API despues de cada renderizado
  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async (searchText: string = "") => {
    let newMemes = await MemeService.getMemes(searchText);
    setMemes(newMemes);
  };

  const searchMemesByEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const searchText = event?.target?.value?.trim().toLowerCase();

    if (memeSearchTimeout != null) clearTimeout(memeSearchTimeout);

    memeSearchTimeout = setTimeout((_) => fetchMemes(searchText), 350);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="¿Que quieres buscar? ¡Encuentralo!"
        onChange={searchMemesByEvent}
      ></input>
      <div className="gif__grid">
        {memes.map((meme, index) => (
          <div key={index}>
            <img
              className="gif__card"
              alt={meme.title}
              src={meme.images.original.url}
            />
            <p>{meme.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
