import './HomeMemesTitle.css';

import trending from './../../../../assets/img/trending.svg';

export const HomeMemesTitle = () => (
  <h2 className='home-title'>
    <img
      className='home-title-icon'
      alt='trending'
      src={trending}
      width='41'
      height='auto'
    />
    Los guif más trendings del momento
  </h2>
);
