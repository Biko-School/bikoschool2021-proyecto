import React from 'react';
import './Home.css';

export const Home = (props: any) => {
  return (
    <>
      {props.gifs.length ? (
        props.gifs.map((gif: any, index: number) => (
          <img key={index} alt={gif.title} src={gif.url} />
        ))
      ) : (
        <div>No se han podido mostrar los gifs.</div>
      )}
    </>
  );
}