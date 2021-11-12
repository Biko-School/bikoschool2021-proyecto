import React, { useState, useEffect } from "react";
import { Meme } from "../core/domain/Meme";
function App() {
  const [memesData, setMemesData] = useState<Meme[]>([]);

  useEffect(() => {
    fetch("http://localhost:3010/api/memes", { mode: "no-cors" })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject("Error");
        }
        return response.json();
      })
      .then((data) => {
        setMemesData(data.memes);
      });
  }, []);
  console.log(memesData);

  if (memesData.length === 0) {
    return <>Loading...</>;
  }

  return (
    <div>
      {memesData.map((result) => (
        <img src={result.images.small.url} alt={result.title} key={result.id} />
      ))}
    </div>
  );
}

export default App;
