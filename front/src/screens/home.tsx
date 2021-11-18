import { useState } from "react";
import MemeList from "../core/services/memeList"
import Search from "../core/services/search"

function Home(){
    
    const memes = MemeList()

    const [filter, setFilter] = useState('')

    const filteredMemes = memes.filter(meme => meme.title.toLowerCase().includes(filter.toLowerCase()))
    console.log(filteredMemes)
    
    return(
        <>
        <Search onFilter={setFilter}/>
        
        <div>
            {
            filteredMemes ? 
            <div>
                <ul>{filteredMemes.map((meme)=> (
                <>
                    <li key={meme.title}>{meme.title}</li>
                    <img src={meme.image} alt="meme"/>
                </>
                ))}
                </ul>
                
            </div> : <span>No hay memes</span>
            }
      </div>
      </>
    )
}

export default Home;