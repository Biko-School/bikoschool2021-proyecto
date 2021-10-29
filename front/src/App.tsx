import React, { useState, useEffect } from 'react';
import './App.css';
import { api } from './api'

export interface IMeme {
  title: string;
  tags: string[];
  date: Date;
  img: string;
}

function App() {
  
  const [memes, setMemes] = useState<IMeme[]>([])

  useEffect(() => {
    (async () => {
      const memesJSON = await api.memes()
      setMemes(memesJSON)
    })()
  }, []);

  const memesImg = memes.map((meme) =>
    <div key={meme.img}><img src={meme.img} alt={meme.title}></img></div>
  );
  
  return (
    <div className="App">
      <div>{memesImg}</div>  
    </div>
  );  
}

export default App;
