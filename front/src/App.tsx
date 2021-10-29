import React, { useEffect, useState } from 'react';
import './reset.css';
import './App.css';
import getMemes from './getMemes'
import hey from "./images/Image5_.png"


function App() {

  const [memes, setMemes] = useState([{"title": '', "image": ''}]);

  useEffect(() => {
    setMemes(getMemes());
   }, []);

  return (
    <div>
      <h1>Guifaffinity</h1>
      {
        memes ? <div>
          <span>Soy un meme: {memes[0].title}</span><img src={hey} alt="meme"/> 
          </div> : <span>No hay memes</span>
      }
    </div>
  )
  }

export default App;