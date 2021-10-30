import React, { useState, useEffect } from "react";

function App() {
  const [memesData, setMemesData] = useState<
    {
      id: string;
      url: string;
      title: string;
    }[]
  >([]);

  useEffect(() => {
    console.log("Inicializando App");

    fetch("/memes")
      .then((response) => {
        console.log("response in memes");
        return response.json();
      })
      .then((data) => {
        console.log("data in memes", data);
        setMemesData(data.results);
      });
  }, []);

  if (memesData.length === 0) {
    return <>Cargando...</>;
  }

  return (
    <div>
      {memesData.map((result) => (
        <img src={result.url} alt={result.title} key={result.id} />
      ))}
    </div>
  );
}

export default App;
