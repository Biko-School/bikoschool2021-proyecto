import React from 'react';
import './Home.css';
import { memes } from './memes.json'

function Home() {

  return (
    <div className="Home">
      {memes.map(meme => 
       <img src={meme.image} key={meme.id} alt={meme.name}/>
      )}  
    </div>
  );
}

export default Home;
