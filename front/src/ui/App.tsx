import React, { useEffect, useState } from "react";
import { MemeType } from "../core/domain/Meme";
import fetchMemes from "../core/infrastructure/fetchMemes";
import Meme from "./components/Meme/Meme";

function App() {
  const [memesData, setMemesData] = useState<MemeType[]>([]);

  useEffect(() => {
    fetchMemes().then((response) => {
      setMemesData(response);
    });
  }, []);

  if (memesData.length === 0) {
    return <>Loading...</>;
  }

  return (
    <div className="memes_grid">
      {memesData.map((result) => (
        <Meme
          title={result.title}
          id={result.id}
          imageUrl={result.images.small.url}
        />
      ))}
    </div>
  );
}

export default App;
