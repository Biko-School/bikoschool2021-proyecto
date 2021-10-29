import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';


interface IGif {
  id: number;
  url: string;
  title: string;
}

export const Home = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const getGifs = async () => {
      const response = await axios.get('http://api.ourdomain.com/gifs')
      console.log('response', response)
    }

    getGifs()
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
