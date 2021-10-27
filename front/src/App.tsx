import "./App.css";
import React, { useEffect } from "react";
import { getMeme } from "./getMeme";

var tituloMeme: String = "";

export const App: React.FC = () => {
  useEffect(() => {
    tituloMeme = getMeme().title;
  }, []);

  return (
    <>
      <div>No hay gifs disponibles</div>
      <h1>{tituloMeme}</h1>
    </>
  );
};
