import React, { useState, useEffect } from "react";
import { Meme } from "../../../core/domain/model/Meme/Meme";
import { fechAllMemes } from "../../../core/service/Meme";

import lens from "../../../images/Lens.png";
import { ApiMemeRepository } from "../../../core/infrastructure/ApiMemeRepository";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import SectionTitle from "../../components/Title/Title";
import Button from "../../components/Button/Button";

export const MemessList: React.FC = () => {

  const [filter, setFilter] = useState('')
  const [memes, setMemes] = useState<Meme[]>([]);  

  useEffect(() => {
    (async () => {
      const memeRepository = new ApiMemeRepository()
      setMemes(await fechAllMemes(memeRepository))
    })();
  }, []);

  // function onSearchMemes() {
  //   setFilter("");
  //   setMemes([]);
  // }

  const filteredMemes: Meme[] = memes.filter((meme:Meme) => meme.tags.find(tag => tag.includes(filter.toLowerCase())));

  return (
    <div className="App">
      <Header />
      <div className="App__SearchBar">
        <Input
          placeholder="¿Qué quieres buscar? ¡Encuéntralo"
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
        />
        <Button onClick={(event) => console.log(event)}/>
        <img
            src={lens}
            alt="Lens"
            width="25px"
            height="25px"
          />
        {/* </Button> */}
      </div>

      <SectionTitle />

      <div className="App__GridGiffs">
        <List memes={filteredMemes} />
      </div>
      
      {/* <Footer memesCount={filteredMemes.length} /> */}
    </div>
  );
};


// const Footer = ({ memesCount }: any) => (
//   <Text size="H3" weight="Bold" text="Los giffs más trendings del momento" /> 
// )

const List = ({ memes }:any) => (
  memes.map((meme:Meme) => (
    <img
      className="App__GridGiffs--Giff"
      src={meme.img}
      alt={meme.title}
    ></img>
  ))
)

  
  

export default MemessList;
