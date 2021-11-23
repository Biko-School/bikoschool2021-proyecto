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
      <div className="memes-container" data-testid="meme-container">
        {props.memes.map((meme: Meme, index: number) => (
          <figure className="memes-figure" key={index}>
            <img
              width="200"
              height="200"
              className="meme-image"
              alt={meme.title}
              src={meme.url}
              data-testid={meme.id}
            />
            <figcaption className="memes-tags">{meme.tags.join('')}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
};
