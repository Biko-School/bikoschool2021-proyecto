// import Tag from "./Tag";
import React from "react";
import { StoredMemeData } from "../core/domain/StoredMemeData";

const GuiffCard: React.VFC<{ meme: StoredMemeData }> = (props) => {
  const { meme } = props;
  return (
    <>
      <img src={meme.images.original.url} alt="guif" key={meme.id} />
      {/* <Tag /> */}
      {/* {<pre>{JSON.stringify(memes[0].images.original.url, null, "\t")}</pre>} */}
    </>
  );
};

export default GuiffCard;
