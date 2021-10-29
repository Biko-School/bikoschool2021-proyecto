import React, { useEffect, useState } from 'react';
import './Home.css';

interface IGif {
  id: number;
  url: string;
  title: string;
}

export const Home = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    function dataGifs() {
      fetch('http://localhost:3000/gifs')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setGifs(data);
        });
    }

    dataGifs();
  }, []);

  return (
    <>
      {gifs.length ? (
        gifs.map((gif: IGif, index: number) => (
          <img key={index} alt={gif.title} src={gif.url} />
        ))
      ) : (
        <div>No se han podido mostrar los gifs.</div>
      )}
    </>
  );
};
