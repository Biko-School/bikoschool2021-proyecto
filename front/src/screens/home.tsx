import React, { MouseEvent } from "react";
import { useState } from "react";
import MemeList from "../core/services/memeList";
import Search from "../core/services/search";
import "./home.css";
import Subtitle from "./subtitle/subtitle";
import Memeinfo from "./memeinfo/memeinfo";

function Home() {
  const memes = MemeList();

  const [filter, setFilter] = useState("");
  console.log(filter);

  const filteredMemes = memes.filter((meme) =>
    meme.title.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filteredMemes);

  const [memeId, setMemeId] = useState("");

  const handleId = (event: MouseEvent<HTMLImageElement>) => {
    //console.log(event.target.id);
    console.log(event.currentTarget.id);
    setMemeId(event.currentTarget.id);
  };

  return (
    <>
      <div>
        {memeId === "" ? (
          <>
            <Search onFilter={setFilter} />
            <Subtitle />
            <ul className="meme-container">
              {filteredMemes.map((meme) => (
                <li>
                  <img
                    className="meme"
                    id={meme.id}
                    src={meme.image}
                    alt={meme.title}
                    onClick={handleId}
                  />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <Memeinfo id={memeId} />
        )}
      </div>
    </>
  );
}

export default Home;
