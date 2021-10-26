import React from 'react';
import './App.css';
import { Home } from './components/Home'
import gifs from './gif.json';


function App() {
  return (
    <Home gifs={gifs}/>  
  );
}

export default App;
