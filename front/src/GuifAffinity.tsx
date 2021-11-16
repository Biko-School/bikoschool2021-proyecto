import "./_reset.css";
import "./GuifAffinity.css";
import GuiffContainer from "./ui/components/GuiffContainer";
import { useState, useEffect } from "react";
import { StoredMemeData } from "./core/domain/StoredMemeData";
import { fetchAllMemes } from "./core/service/ApiService";

function GuifAffinity() {
  const [memes, setMemes] = useState<StoredMemeData[]>([]);

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
      <GuiffContainer memes={memes} />
    </>
  );
}

export default GuifAffinity;
