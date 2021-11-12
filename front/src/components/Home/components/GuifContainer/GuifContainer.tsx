import React from 'react';
import './GuifContainer.css';
import { Meme } from './../../Home';

export const GuifContainer = (props: any) => {
  if (props.loading) {
    return <p>Cargando...</p>;
  }

  if (props.error) {
    return <div>No se han podido mostrar los gifs.</div>;
  }

  return (
    <>
      <div className='guif-container'>
        {props.gifs.map((gif: Meme, index: number) => (
          <div className='guif-wrapper' key={index}>
            <img
              width='200'
              height='200'
              className='guif-image'
              alt={gif.title}
              src={gif.url}
            />
          </div>
        ))}
      </div>
    </>
  );
};
