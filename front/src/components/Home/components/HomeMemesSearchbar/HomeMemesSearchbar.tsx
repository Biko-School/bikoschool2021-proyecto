import './HomeMemesSearchbar.css';
import search from './../../../../assets/img/search.svg';

export const HomeMemesSearchbar = (props: any) => (
  <label className='home-memes-searchbar'>
    <input
      className='home-memes-searchbar-input'
      type='text'
      placeholder='¿Qué quieres buscar? ¡Encuéntralo!'
      value={props.filter}
      onChange={(event) => props.onFilter(event)}
    />
    <button className='home-memes-searchbar-button'>
      <img
        className='home-memes-searchbar-button-img'
        alt='search'
        src={search}
        width='42'
        height='42'
      />
    </button>
  </label>
);
