import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { GuifContainer } from './components/GuifContainer';

import trending from './../../assets/img/trending.svg';
import logoGuifaffinity from './../../assets/img/logoGuifaffinity.svg';
import search from './../../assets/img/search.svg';

export interface Meme {
  id: string;
  url: string;
  title: string;
}

export const Home = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState('');

  const filteredMemes = gifs.filter((meme: Meme) =>
    meme.title.toLowerCase().includes(filter.toLowerCase())
  );

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
      <div className="home-container">
        <header className="home-header">
          <img
            className=""
            alt="Logo Guifaffinity"
            src={logoGuifaffinity}
            width="56"
            height="61"
          />
          <h1>GUIFAFFINITY</h1>
        </header>
        <label className="home-searchbar">
          <input
            className="home-searchbar-input"
            type="text"
            placeholder="¿Qué quieres buscar? ¡Encuéntralo!"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
          <button className="home-searchbar-button">
            <img
              className="home-searchbar-button-img"
              alt="search"
              src={search}
              width="42"
              height="42"
            />
          </button>
        </label>

        <h2 className="home-title">
          <img
            className="home-title-icon"
            alt="trending"
            src={trending}
            width="41"
            height="auto"
          />
          Los guif más trendings del momento
        </h2>
        <GuifContainer
          gifs={filteredMemes}
          loading={loading}
          error={error}
        ></GuifContainer>
      </div>
    </>
  );
};
