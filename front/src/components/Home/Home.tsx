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
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get('http://api.bikoschool.dev/gifs')
      .then(response => setGifs(response.data))
      .catch(error => setError(true))
      .finally(() => setLoading(false))
  }, []);

  if (loading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <div>No se han podido mostrar los gifs.</div>
  }

  return (
    <>
      {
        gifs.map((gif: IGif, index: number) => (
          <img key={index} alt={gif.title} src={gif.url} />
        ))
      }
    </>
  );
};
