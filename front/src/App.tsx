import "./_reset.css";
import "./App.css";
import GuifContainer from "./ui/components/GuifContainer/GuifContainer";
import Header from "./ui/components/Header/Header";
import { useState, useEffect } from "react";
import Meme from "./core/domain/Meme";
import { fetchAllMemes } from "./core/service/ApiService";

function App() {
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
        <Header />
        <p>Cargando...</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <GuifContainer memes={memes} />
    </>
  );
}

export default App;
