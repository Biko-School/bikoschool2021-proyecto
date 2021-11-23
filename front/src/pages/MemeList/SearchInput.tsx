import React from "react";
import "./SearchInput.css";

export const SearchInput: React.FC = () => {
  return (
    <>
      <input
        className="searchInput"
        placeholder="¿Qué quieres buscar?¡Encuentralo!"
      ></input>
    </>
  );
};
