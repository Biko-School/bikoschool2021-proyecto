import "./App.css";
import React, { useEffect } from "react";
import { memeService } from "./services/getMeme";
import { Meme } from "./entities/Meme";
import { MemeDTO } from "./entities/MemeDTO";

export const App: React.FC = () => {
  const [titleMeme, setMeme] = React.useState<{ title: string }>();
  const [gifImage, setGifImage] = React.useState("");
  const [meme50, setMeme50] = React.useState<Meme[]>();
  useEffect(() => {
    setMeme(memeService.getMeme());
    setGifImage(memeService.getMeme()?.urlOriginal);
  }, []);

  useEffect(() => {
    memeService.api.memes().then((memes) => {
      const memesProperties: Meme[] = memes.map((meme: MemeDTO) => {
        return {
          title: meme.title,
          id: meme.id,
          url: meme.images.original.url,
          dateTime: meme.import_datetime,
          tags: meme.tags,
        };
      });
      setMeme50(memesProperties);
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
      <div className="app">
        {titleMeme && gifImage ? (
          <>
            <h1>{titleMeme.title}</h1>
            <img src={gifImage} alt="gifImage" id="2"></img>
            <ul>
              {meme50?.map((meme) => {
                return <img src={meme.url} alt={meme.title} id={meme.id}></img>;
              })}
            </ul>
          </>
        ) : (
          <div>There are not availables gifs</div>
        )}
      </div>
    </>
  );
};
