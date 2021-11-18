import React from 'react';
import './HomeMemesContainer.css';
import { Meme } from '../../Home';

export const HomeMemesContainer = (props: any) => {
  if (props.loading) {
    return <p>Cargando...</p>;
  }

  if (props.error) {
    return <div>No se han podido mostrar los gifs.</div>;
  }

  return (
    <>
      <div className='guif-container' data-testid='meme-container'>
        {props.memes.map((meme: Meme, index: number) => (
          <div className='guif-wrapper' key={index}>
            <img
              width='200'
              height='200'
              className='guif-image'
              alt={meme.title}
              src={meme.url}
              data-testid={meme.id}
            />
          </div>
        ))}
      </div>
    </>
  );
};
