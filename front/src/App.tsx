import React, { useState, useEffect } from 'react';
import './App.css';
import { api } from './api'

export interface IMeme {
  title: string;
  tags: string[];
  date: Date;
}

function App() {
  
  const [memes, setMemes] = useState<IMeme[]>([])

  useEffect(() => {
    (async () => {
      const memesJSON = await api.memes();
      console.log(memesJSON)
      setMemes(memesJSON);
    })()
  }, []);

  const memesList = memes.map((meme) =>
    <li key={meme.title}>{meme.title}</li>
  );
  return (
    <div className="App">
      <ul>
        {memesList}
      </ul>
    </div>
  );  
}

export default App;
