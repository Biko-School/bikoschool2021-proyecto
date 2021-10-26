import React from 'react';
import './App.css';
import gifs from './gif.json';

function App() {
  return (
    <>
      <div>No se han podido mostrar los gifs.</div>
      {gifs.map((gif, index) => (
        <img key={index} alt={gif.title} src={gif.url} />
      ))}
    </>
  );
}

export default App;
