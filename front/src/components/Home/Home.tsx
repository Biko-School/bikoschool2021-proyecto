import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';

import { HomeHeader } from './components/HomeHeader';
import { HomeMemesTitle } from './components/HomeMemesTitle';
import { HomeMemesSearchbar } from './components/HomeMemesSearchbar';
import { HomeMemesContainer } from './components/HomeMemesContainer';

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
        <HomeMemesSearchbar
          onFilter={(event: any) => setFilter(event.target.value)}
          filter={filter}
        ></HomeMemesSearchbar>
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
