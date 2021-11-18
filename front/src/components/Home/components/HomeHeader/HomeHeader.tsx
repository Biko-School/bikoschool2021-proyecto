import './HomeHeader.css';
import logoGuifaffinity from './../../../../assets/img/logoGuifaffinity.svg';

export const HomeHeader = () => (
  <header className='home-header'>
    <img
      className=''
      alt='Logo Guifaffinity'
      src={logoGuifaffinity}
      width='56'
      height='61'
    />
    <h1>GUIFAFFINITY</h1>
  </header>
);
