import GuifContainer from "../../components/GuifContainer/GuifContainer";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import Meme from "../../../core/domain/Meme";
import { fetchAllMemes } from "../../../core/service/ApiService";

export const HomePage = () => {
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
    <div>
      <Header />
      <GuifContainer memes={memes} />
    </div>
  );
};

export default HomePage;
