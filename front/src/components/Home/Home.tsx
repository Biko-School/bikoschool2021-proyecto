import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';

import { HomeMemesTitle } from './components/HomeMemesTitle';
import { HomeHeader } from './components/HomeHeader';
import { HomeMemesContainer } from './components/HomeMemesContainer';

import search from './../../assets/img/search.svg';

export interface Meme {
  id: string;
  url: string;
  title: string;
  username: string;
  tags: string[];
  time: string;
}

export const Home = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState('');

  const formatedFilter: string = filter
    .split(' ')
    .filter((substring: string) => substring)
    .join(' ')
    .toLowerCase();

  let filteredMemes = memes.filter((meme: Meme) => {
    return (
      formatedFilter.length < 3 ||
      meme.tags.some((tag: string) =>
        tag.toLowerCase().includes(formatedFilter)
      )
    );
  });

  if (formatedFilter.length > 3) {
    filteredMemes = filteredMemes.sort((meme1: Meme, meme2: Meme) => {
      return meme1.time < meme2.time ? 1 : meme2.time < meme1.time ? -1 : 0;
    });
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:4200/api/memes')
      .then((response) => setMemes(response.data))
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className='home-container'>
        <HomeHeader></HomeHeader>
        <label className='home-searchbar'>
          <input
            className='home-searchbar-input'
            type='text'
            placeholder='¿Qué quieres buscar? ¡Encuéntralo!'
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
          <button className='home-searchbar-button'>
            <img
              className='home-searchbar-button-img'
              alt='search'
              src={search}
              width='42'
              height='42'
            />
          </button>
        </label>

        <HomeMemesTitle></HomeMemesTitle>
        <HomeMemesContainer
          memes={filteredMemes}
          loading={loading}
          error={error}
        ></HomeMemesContainer>
      </div>
    </>
  );
};
