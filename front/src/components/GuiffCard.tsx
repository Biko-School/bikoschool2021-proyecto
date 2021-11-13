import { useState, useEffect } from "react";
import Tag from "./Tag";
import { api } from "./../core/ApiService";
import { StoredMemeData } from "../core/domain/StoredMemeData";

const GuiffCard = () => {
  const [memes, setMemes] = useState<StoredMemeData[]>([]);

  const fetchMeme = async () => {
    const rawMemes = await api.memes();
    setMemes(rawMemes);
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  if (memes.length === 0) {
    return <p>Cargando...</p>;
  }
  return (
    <>
      <img src={memes[0].images.original.url} alt="guif" />
      <Tag />
      {/* {<pre>{JSON.stringify(memes[0].images.original.url, null, "\t")}</pre>} */}
    </>
  );
};

export default GuiffCard;
