import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';

interface Meme {
  id: string;
  url: string;
  title: string;
}

export const Home = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:4200/api/memes')
      .then((response) => setGifs(response.data))
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <div>No se han podido mostrar los gifs.</div>;
  }

  return (
    <>
      <div className="guif-container">
        {gifs.map((gif: Meme, index: number) => (
          <div className="guif-wrapper">
            <img
              className="guif-image"
              key={index}
              alt={gif.title}
              src={gif.url}
            />
          </div>
        ))}
      </div>
    </>
  );
};
