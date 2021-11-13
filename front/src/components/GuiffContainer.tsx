
import React from "react";
import { StoredMemeData } from "../core/domain/StoredMemeData";
import GuiffCard from "./GuiffCard";

export const GuiffContainer:React.VFC<{memes:StoredMemeData[]}> = ({memes}) => {
  return <GuiffCard meme={memes[0]} />;
};

export default GuiffContainer;
