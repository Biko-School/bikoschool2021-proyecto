import React from "react";
import "./SearchInput.css";
import SearchButton from "./SearchButton.svg";

export const SearchInput: React.FC = () => {
  return (
    <div className="searchInput">
      <input
        className="boxInput"
        placeholder="¿Qué quieres buscar?¡Encuentralo!"
      />
      <button className="boxButton">
        <img src={SearchButton} alt="SearchButton" />
      </button>
    </div>
  );
};
