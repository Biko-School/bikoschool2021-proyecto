import "./App.css";
import React, { useEffect } from "react";
import { memeService } from "./getMeme";

//var tituloMeme: String = "";

export const App: React.FC = () => {
  const [titleMeme, setTitleMeme] = React.useState("");
  useEffect(() => {
    //tituloMeme = getMeme().title;
    setTitleMeme(memeService.getMeme()?.title);
  }, []);

  return (
    <>
      {titleMeme ? (
        <h1>{titleMeme}</h1>
      ) : (
        <div>There are not availables gifs</div>
      )}
    </>
  );
};
