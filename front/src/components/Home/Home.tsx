import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { GuifContainer } from './components/GuifContainer';
import trending from './../../assets/img/trending.svg';

export interface Meme {
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

  return (
    <>
      <div className='home-container'>
        <h2 className='home-title'>
          <img className='home-title-icon' alt='trending' src={trending}></img>
          Los guif más trendings del momento
        </h2>
        <GuifContainer
          gifs={gifs}
          loading={loading}
          error={error}
        ></GuifContainer>
      </div>
    </>
  );
};
