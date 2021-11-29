import React, { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";
//import getMemes from './getMemes'

function App() {
  const [memes, setMemes] = useState([
    { title: "", images: { original: { url: "" } } },
  ]);

  async function fetchData() {
    const initialData = await fetch("http://localhost:3001/api/memes");

    const initialJson = await initialData.json();
    setMemes(initialJson);
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(memes);
  return (
    <div>
      <h1>Guifaffinity</h1>
      {memes ? (
        <div>
          <ul>
            {memes.map((meme) => (
              <>
                <li key={meme.title}>{meme.title}</li>
                <img src={meme.images.original.url} alt="meme" />
              </>
            ))}
          </ul>
        </div>
      ) : (
        <span>No hay memes</span>
      )}
    </div>
  );
}

export default App;
