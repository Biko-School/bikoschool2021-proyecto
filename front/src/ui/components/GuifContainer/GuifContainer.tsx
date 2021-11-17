import React from "react";
import { StoredMemeData } from "../../../core/domain/StoredMemeData";
import GuifCard from "../GuifCard/GuifCard";
import "./GuifContainer.css";

export const GuifContainer: React.VFC<{ memes: StoredMemeData[] }> = ({
  memes,
}) => {
  const JsxMemesArray = [];

  for (let i = 0; i < memes.length; i++) {
    JsxMemesArray.push(<GuifCard meme={memes[i]} key={memes[i].id} />);
  }
  return <div className="guif-container">{JsxMemesArray}</div>;
};

export default GuifContainer;
