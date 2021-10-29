import "./App.css";
import React, { useEffect } from "react";
import { memeService } from "./getMeme";

export const App: React.FC = () => {
  const [titleMeme, setMeme] = React.useState<{ title: string }>();
  const [gifImage, setGifImage] = React.useState("");
  useEffect(() => {
    setMeme(memeService.getMeme());
    setGifImage(memeService.getMeme()?.src);
  }, []);

  return (
    <>
      {titleMeme && gifImage ? (
        <>
          <h1>{titleMeme.title}</h1>
          <img src={gifImage} alt="gifImage" id="2"></img>
        </>
      ) : (
        <div>There are not availables gifs</div>
      )}
    </>
  );
};
