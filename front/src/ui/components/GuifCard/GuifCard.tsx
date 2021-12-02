//import Tag from "../Tag/Tag"
import React from "react";
import Meme from "../../../core/domain/Meme";
import { useNavigate } from "react-router-dom";
import "./GuifCard.css";

const GuifCard: React.VFC<{ meme: Meme }> = (props) => {
  const { meme } = props;
  let joinedTags: string = "";
  let navigate = useNavigate();

  async function navigateToMeme(event: any, memeId: string) {
    navigate(`/memeSheet/${memeId}`, { replace: true });
  }

  for (let tag in meme.tags) {
    joinedTags += meme.tags[tag] + " ";
  }

  return (
    <div className="guif-card">
      <img
        src={meme.url}
        alt="guif"
        className="guif-card__img"
        key={meme.title}
        onClick={(event) => {
          navigateToMeme(event, meme.id);
        }}
      />
      <span className="guif-card__joined-tags">{joinedTags}</span>
      {/* <Tag /> */}
      {/* {<pre>{JSON.stringify(memes[0].images.original.url, null, "\t")}</pre>} */}
    </div>
  );
};

export default GuifCard;
