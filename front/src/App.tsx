import "./App.css";
import React, { useEffect } from "react";
import { memeService } from "./services/getMeme";
import { DatabaseSchema } from "../../api/src/DatabaseSchema";

export const App: React.FC = () => {
  const [titleMeme, setMeme] = React.useState<{ title: string }>();
  const [gifImage, setGifImage] = React.useState("");
  const [meme50, setMeme50] = React.useState<DatabaseSchema>();
  useEffect(() => {
    setMeme(memeService.getMeme());
    setGifImage(memeService.getMeme()?.src);
  }, []);

  useEffect(() => {
    memeService.api.memes().then((memes) => {
      setMeme50(memes);
    });
  }, []);

  // useEffect(() => {
  //   const getMemes = async () => {
  //     const memes = await memeService.api.memes();
  //     setMeme50(memes);
  //   };
  //   getMemes();
  // }, []);

  // Realizar llamada a la API
  // Mapear la llamada al html

  return (
    <>
      {titleMeme && gifImage ? (
        <>
          <h1>{titleMeme.title}</h1>
          <div>{meme50}</div>
          <img src={gifImage} alt="gifImage" id="2"></img>
        </>
      ) : (
        <div>There are not availables gifs</div>
      )}
    </>
  );
};
