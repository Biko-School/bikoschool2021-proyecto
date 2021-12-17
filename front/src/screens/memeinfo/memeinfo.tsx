import { useEffect, useState } from "react";
import { Meme } from "../../core/domain/meme";
import JsonMeme from "../../core/infrastructure/JsonMeme";
import "./memeinfo.css";

interface Props {
  id: string;
}

let memesRepository: Meme;

function Memeinfo({ id }: Props) {
  let memeRepo = new JsonMeme(`http://localhost:3001/api/memes/${id}`);
  const emptyMeme = new Meme("", "", "", [""]);
  const [meme, setMeme] = useState<Meme>(emptyMeme);

  useEffect(() => {
    async function getData() {
      memesRepository = await memeRepo.getMeme();
      setMeme(memesRepository);
      console.log(meme);
    }
    getData();
  }, []);

  return (
    <div>
      <h1>
        {meme.title ? (
          <div>
            <div>
              <div className="memeinfo-title">{meme.title}</div>
              <img
                className="memeinfo-image"
                src={meme.image}
                alt={meme.title}
              />
            </div>
            <div>
              <ul>
                {meme.tags.map((tag) => (
                  <li className="memeinfo-tags">{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <h1>Loading ...</h1>
        )}
      </h1>
    </div>
  );
}

export default Memeinfo;
