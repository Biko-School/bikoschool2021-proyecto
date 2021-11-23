import "./_reset.css";
import "./App.css";
import GuifContainer from "./ui/components/GuifContainer/GuifContainer";
import { useState, useEffect } from "react";
import Meme from "./core/domain/Meme";
import { fetchAllMemes } from "./core/service/ApiService";

// Librerías requeridas para enrutar
import React from "react";
import {BrowserRouter as Router, Routes, Route,Link, useParams} from "react-router-dom";

// La segunda página que vamos a renderizar
import GifSheet from "./ui/components/GifSheet/GifSheet"


function App() {

  let memeId : string = "l0DEJovrRP58i5T1K";

  return(
    <Router>

      <div>
      
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/memeSheet">Sheet</Link>
            </li>
            <li>
              <Link to={`/memeSheet/${memeId}`} key={memeId}>See meme with ID: {memeId}</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={Home()} />
          <Route path="/memeSheet/:memeId" element={<ShowSpecificSheet/>}>
          </Route>
          <Route path="*" element={
            <main>
              <p>There's nothing here! No match route</p>
            </main>
          }/>

        </Routes>
      
      </div>


    </Router>

  )


}

function Home () {
  const [memes, setMemes] = useState<Meme[]>([]);

  const getMemes = async () => {
    const response = await fetchAllMemes();
    setMemes(response);
  };

  useEffect(() => {
    getMemes();
  }, []);


  if (memes.length === 0) {
    return (
      <>
        <p>Cargando...</p>
      </>
    );
  }

  return (
    <>
      <GuifContainer memes={memes} />
    </>
  );
}

function  Sheet() {
  return(
    <div>
      <GifSheet/>
    </div>
    
  )
}

function  ShowSpecificSheet(){
  console.log('holi')
  const memeId = useParams()
  console.log(memeId)
  return(
    <div>
      <p>{JSON.stringify(memeId)}</p>
      <GifSheet/>
    </div>
    
  )
}

export default App;
