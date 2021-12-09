import "./MemesList.css";
import React, { useState, useEffect } from "react";
import { Meme } from "../../../core/domain/model/Meme/Meme";
import { fechAllMemes } from "../../../core/service/Meme";
import arrow from "../../../images/Arrow.png";
import { ApiMemeRepository } from "../../../core/infrastructure/ApiMemeRepository";
import Header from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { Title } from "../../components/Title/Title";
import { Memes } from "../components/Memes";
import { Button } from "../../components/Button/Button";
import { fechMemesByTag } from "../../../core/service/Meme/fechMemesByTag";

export const MemesList: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [memes, setMemes] = useState<Meme[]>([]);
  var inputMeme = "";

  useEffect(() => {
    (async () => {
      const memeRepository = new ApiMemeRepository();
      setMemes(await fechAllMemes(memeRepository));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const memeRepository = new ApiMemeRepository();
      setMemes(await fechMemesByTag(memeRepository, filter));
    })();
  }, [filter]);

  const filteredMemes: Meme[] = memes.filter((meme: Meme) =>
    meme.tags.find((tag) => tag.includes(filter.toLowerCase()))
  );

  return (
    <>
      <Header />
      <div className="search_bar">
        <Input
          placeholder="¿Qué quieres buscar? ¡Encuéntralo!"
          onChange={(event) => {
            if (event.target.value === "") {
              setFilter(event.target.value);
            } else {
              inputMeme = event.target.value;
            }
          }}
        />
        <Button
          onClick={() => {
            if (inputMeme !== "") {
              setFilter(inputMeme);
            }
          }}
        />
      </div>

      <div className="section_title">
        <img src={arrow} alt="logo" width="25" height="20" />
        <Title
          size="H3"
          weight="Bold"
          text="Los giffs más trendings del momento"
        />
      </div>

      <div className="gridd_giffs">
        <Memes memes={filteredMemes} />
      </div>
    </>
  );
};
