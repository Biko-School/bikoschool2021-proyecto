import "./GuifAffinity.css";
import GuiffContainer from "./components/GuiffContainer";
import { useState, useEffect } from "react";
import { api } from "./core/infrastructure/ApiService";
import { StoredMemeData } from "./core/domain/StoredMemeData";


function GuifAffinity() {

  const [memes, setMemes] = useState<StoredMemeData[]>([]);

  const fetchMeme = async () => {
    const rawMemes = await api.memes();
    setMemes(rawMemes);
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  if (memes.length === 0){
    return(
    <>
      <p>Cargando...</p>
    </>
    );
  }
  
  return (
    <>
      <GuiffContainer memes={memes}/>
    </>
  );
}

export default GuifAffinity;
