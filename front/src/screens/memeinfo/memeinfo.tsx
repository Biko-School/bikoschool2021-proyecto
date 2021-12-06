import { useEffect, useState } from "react";
import { Meme } from "../../core/domain/meme";
import JsonMeme from "../../core/infrastructure/JsonMeme";

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
          <>
            <div>{meme.title}</div>
            <img src={meme.image} alt="meme" />
          </>
        ) : (
          <h1>Loading ...</h1>
        )}
      </h1>
    </div>
  );
}

export default Memeinfo;
