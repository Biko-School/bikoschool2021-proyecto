import { useEffect, useState } from "react";
import { Meme } from "../domain/meme"
import JsonMemes from "../infrastructure/JsonMemes"

let memesRepository: Meme[];
//{'title': '', 'images': {'original': {'url': ''}}}
function RenderMemes() {

  let memeRepo = new JsonMemes("http://localhost:3001/api/memes")

    const [memes, setMemes] = useState<Meme[]>([]);

    useEffect(() => {
      async function getData() { 
        memesRepository = await memeRepo.getMemes()
        setMemes(memesRepository)
      }
      getData()
      console.log(memes)
    }, []);

    return(
        <div>
        {
          memes ? <div>
            <ul>{memes.map((meme)=> (
              <>
              <li key={meme.title}>{meme.title}</li>
              <img src={meme.image} alt="meme"/>
              </>
              ))}
            </ul>
            
            </div> : <span>No hay memes</span>
        }
      </div>
    )

}

export default RenderMemes;