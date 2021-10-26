import React, { useState, useEffect } from 'react';
import './App.css';
import memes from './memes.json'

function App() {
  
  // const [memes, setMemes] = useState([])

  // const fechMemes = () => { 
  //   setMemes(memesJson)
  // }

  // useEffect(() => {
  //   fechMemes()
  // }, []);

  const memesList = memes.results.map((meme) =>
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
