import React from 'react';
import './App.css';

interface Meme {
  alt: string;
  src: string;
}

function App(meme: Meme) {
  return (
   <img src={meme.src} alt={meme.alt}/>  );
}

export default App;
