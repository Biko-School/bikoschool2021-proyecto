import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios'

interface IGif {
  id: number;
  url: string;
  title: string;
}

export const Home = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    axios.get('http://api.bikoschool.dev/gifs')
      .then(response => setGifs(response.data))
      .catch(error => {})
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
