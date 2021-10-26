import React, { useEffect, useState } from 'react';

import './reset.css';
import './App.css';

function App() {

  const [meme, setMeme] = useState(false);

  useEffect(() => {
    setMeme(true);
   }, []);

  const getMemes = (meme: boolean) => {
    return (
      meme ? <span>Soy un meme</span> : <span>No hay memes</span>
    )
  }

  return (
    
    <div>
      <h1>Guifaffinity</h1>
      {
        getMemes(meme)
      }
    </div>
  )
  }

export default App;