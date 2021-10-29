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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get('http://api.bikoschool.dev/gifs')
      .then(response => setGifs(response.data))
      .catch(error => {})
      .finally(() => setLoading(false))
  }, []);

  if (loading) {
    return <p>Cargando...</p>
  }

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
