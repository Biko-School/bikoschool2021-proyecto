import { useState } from "react";
import MemeList from "../core/services/memeList";
import Search from "../core/services/search";
import "./home.css";
import Subtitle from "./subtitle/subtitle";

function Home() {
  const memes = MemeList();

  const [filter, setFilter] = useState("");

  const filteredMemes = memes.filter((meme) =>
    meme.title.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filteredMemes);

  return (
    <>
      <Search onFilter={setFilter} />
      <Subtitle />
      <div>
        {filteredMemes ? (
          <ul className="meme-container">
            {filteredMemes.map((meme) => (
              <li>
                <img className="meme" src={meme.image} alt="meme" />
              </li>
            ))}
          </ul>
        ) : (
          <span>No hay memes</span>
        )}
      </div>
    </>
  );
}

export default Home;
