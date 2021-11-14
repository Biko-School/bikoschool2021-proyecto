import { useEffect, useState } from "react";
import MemeRepository from "../domain/MemeRepository";
import { Meme } from "../domain/meme"

let variable: Promise<Meme[]>;
//{'title': '', 'images': {'original': {'url': ''}}}
function renderMemes(repository: MemeRepository ) {

    const [memes, setMemes] = useState([]);

    variable = repository.getMemes("http://localhost:3001/api/memes")

    useEffect(() => {
      setMemes(variable)
       }, []);

       
    
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