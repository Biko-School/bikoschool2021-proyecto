import React from "react";
import "./Header.css";
import logo from "./Logo.png";

export const Header: React.VFC<{}> = () => {
  return (
    <>
      <div className="header-container">
        <img className="logo" src={logo} alt="Guifaffinity icon" />
        <h1>GUIFAFFINITY</h1>
      </div>
      <div className="trending-title-container">
        <img
          className="trending-icon"
          src="icon/trending.svg"
          alt="trending icon"
        />
        <h2>Los guif más trendings del momento</h2>
      </div>
    </>
  );
};

export default Header;
