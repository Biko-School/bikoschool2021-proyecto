import React, { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState<
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
        setImages(data.results);
      });
  }, []);

  if (images.length === 0) {
    return <>Cargando...</>;
  }

  return (
    <div>
      {images.map((result) => (
        <img src={result.url} alt={result.title} key={result.id} />
      ))}
    </div>
  );
}

export default App;
