//import Tag from "../Tag/Tag"
import React from "react";
import { StoredMemeData } from "../../../core/domain/StoredMemeData";
import "./GuiffCard.css";

const GuiffCard: React.VFC<{ meme: StoredMemeData }> = (props) => {
  const { meme } = props;
  let joinedTags: string = "";

  for (let tag in meme.tags) {
    joinedTags += meme.tags[tag] + " ";
  }

  return (
    <div>
      <img
        src={meme.images.original.url}
        alt="guif"
        className="guif-card"
        key={meme.id}
      />
      <span className="guif-card__joined-tags">{joinedTags}</span>
      {/* <Tag /> */}
      {/* {<pre>{JSON.stringify(memes[0].images.original.url, null, "\t")}</pre>} */}
    </div>
  );
};

export default GuiffCard;
