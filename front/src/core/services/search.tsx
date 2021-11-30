import React, { ChangeEvent } from "react";
import "../../reset.css";
import "./search.css";

interface Props {
  onFilter: (value: string) => void;
}

function Search({ onFilter }: Props) {
  let name: string;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => (
    (name = event.target.value), console.log(name)
  );

  return (
    <div className="search-parent">
      <div className="search">
        <input
          className="search-input"
          type="text"
          onChange={handleChange}
        ></input>
        <button
          className="search-button"
          onClick={() => onFilter(name)}
        ></button>
      </div>
    </div>
  );
}

export default Search;
