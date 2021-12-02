import React, { ChangeEvent } from "react";
import "../../reset.css";
import "./search.css";
import ellipse from "./ellipse.png";
import line from "./line.png";

interface Props {
  onFilter: (value: string) => void;
}

function Search({ onFilter }: Props) {
  let name: string;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => (
    (name = event.target.value), console.log(name)
  );

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        onChange={handleChange}
      ></input>
      <button className="search-button" onClick={() => onFilter(name)}>
        <img className="search-button-ellipse" src={ellipse} alt="ellipse" />
        <img className="search-button-line" src={line} alt="line" />
      </button>
    </div>
  );
}

export default Search;
