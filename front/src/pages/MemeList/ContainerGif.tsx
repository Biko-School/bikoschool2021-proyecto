import React from "react";
import "./ContainerGif.css";
import { Meme } from "../../entities/Meme";

export const ContainerGif = ({ meme50 }: any) => {
  return (
    <div className="containerGif">
      {meme50?.map((meme: Meme) => {
        return (
          <img
            className="gif"
            src={meme.url}
            alt={meme.title}
            id={meme.id}
          ></img>
        );
      })}
    </div>
  );
};
