import React, { useEffect } from 'react';
import './Home.css';

interface IGif {
  id: number;
  url: string;
  title: string;
}

export const Home = () => {
  useEffect(() => {}, []);

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
