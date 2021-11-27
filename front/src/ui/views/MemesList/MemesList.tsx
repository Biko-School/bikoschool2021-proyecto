import React, { useState, useEffect } from "react";
import { Meme } from "../../../core/domain/model/Meme/Meme";
import { fechAllMemes } from "../../../core/service/Meme";

import arrow from "../../../images/Arrow.png";
import { ApiMemeRepository } from "../../../core/infrastructure/ApiMemeRepository";
import Header from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
// import { Button } from "../../components/Button/Button";
import { Title } from "../../components/Title/Title";
import { List } from "./_components/List";
import { Button } from "../../components/Button/Button";

export const MemesList: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    (async () => {
      const memeRepository = new ApiMemeRepository();
      setMemes(await fechAllMemes(memeRepository));
    })();
  }, []);

  const filteredMemes: Meme[] = memes.filter((meme: Meme) =>
    meme.tags.find((tag) => tag.includes(filter.toLowerCase()))
  );

  return (
    <div className="App">
      <Header />
      <div className="App__SearchBar">
        <Input
          placeholder="¿Qué quieres buscar? ¡Encuéntralo!!"
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
        />
        <Button onClick={(event) => console.log(event)} />
      </div>

      <div className="App__SectionTitle">
        <img src={arrow} alt="logo" width="25" height="20" />
        <Title
          size="H3"
          weight="Bold"
          text="Los giffs más trendings del momento"
        />
      </div>

      <div className="App__GridGiffs">
        <List memes={filteredMemes} />
      </div>
    </div>
  );
};
