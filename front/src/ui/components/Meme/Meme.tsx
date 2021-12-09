import React from "react";
import "./meme.css";

const Meme = (props: { title: string; id: string; imageUrl: string }) => {
  return (
    <div
      className="meme"
      title={props.title}
      key={props.id}
      style={{
        backgroundImage: `url(${props.imageUrl})`,
      }}
    ></div>
  );
};

export default Meme;
