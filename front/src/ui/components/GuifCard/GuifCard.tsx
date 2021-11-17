//import Tag from "../Tag/Tag"
import React from "react";
import { StoredMemeData } from "../../../core/domain/StoredMemeData";
import "./GuifCard.css";

const GuifCard: React.VFC<{ meme: StoredMemeData }> = (props) => {
  const { meme } = props;
  let joinedTags: string = "";

  for (let tag in meme.tags) {
    joinedTags += meme.tags[tag] + " ";
  }

  return (
    <div className="guif-card">
      <img
        src={meme.images.original.url}
        alt="guif"
        className="guif-card__img"
        key={meme.id}
      />
      <span className="guif-card__joined-tags">{joinedTags}</span>
      {/* <Tag /> */}
      {/* {<pre>{JSON.stringify(memes[0].images.original.url, null, "\t")}</pre>} */}
    </div>
  );
};

export default GuifCard;
