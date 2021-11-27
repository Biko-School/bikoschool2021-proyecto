import { useState } from "react";
import MemeList from "../core/services/memeList";
import Search from "../core/services/search";
import "./home.css";

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

      <div>
        {filteredMemes ? (
          <div className="meme-parent-container">
            <ul className="meme-container">
              {filteredMemes.map((meme) => (
                <li>
                  <img className="meme" src={meme.image} alt="meme" />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <span>No hay memes</span>
        )}
      </div>
    </>
  );
}

export default Home;
