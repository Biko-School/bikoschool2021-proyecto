import { useState } from "react";
import MemeRepository from "../domain/MemeRepository";

function renderMemes(repository: MemeRepository ) {

    const [memes, setMemes] = useState([{'title': '', 'images': {'original': {'url': ''}}}]);
    const memes = repository.getMemes("http://localhost:3001/api/memes")

    return(
        <div>
        <h1>Guifaffinity</h1>
        {
          memes ? <div>
            <ul>{memes.map((meme)=> (
              <>
              <li key={meme.title}>{meme.title}</li>
              <img src={meme.images.original.url} alt="meme"/>
              </>
              ))}
            </ul>
            
            </div> : <span>No hay memes</span>
        }
      </div>
    )

}