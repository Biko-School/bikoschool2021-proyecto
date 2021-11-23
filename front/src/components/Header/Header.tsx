import React from "react";
import Logo from "./Logo.svg";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__image">
          <img src={Logo} alt="GuifaniffinityLogo"></img>
        </div>
        <div className="header__title">GUIFAFFINITY</div>
      </header>
    </>
  );
};
