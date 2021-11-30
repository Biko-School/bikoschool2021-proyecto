import { useEffect, useState } from 'react';
import './Home.css';

import { HomeHeader } from './components/HomeHeader';
import { HomeMemesTitle } from './components/HomeMemesTitle';
import { HomeMemesSearchbar } from './components/HomeMemesSearchbar';
import { HomeMemesContainer } from './components/HomeMemesContainer';

import { Meme } from '../../core/domain/model/Meme/Meme';
import { MemeService } from '../../core/services/Meme';

export const Home = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState('');

  const filteredMemes: Meme[] = MemeService.filterMemes(filter, memes);

  useEffect(() => {
    setLoading(true);
    MemeService.all()
      .then((response) => setMemes(response.data))
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="home-container">
        <HomeHeader />
        <HomeMemesSearchbar
          onFilter={(event: any) => setFilter(event.target.value)}
          filter={filter}
        />
        <HomeMemesTitle />
        <HomeMemesContainer
          memes={filteredMemes}
          loading={loading}
          error={error}
        />
      </div>
    </>
  );
};
