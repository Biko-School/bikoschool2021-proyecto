import React from "react";
import "./Header.css";
import logo from "./Logo.png";
import icon from "./trending.svg";

export const Header: React.VFC<{}> = () => {
  return (
    <>
      <div className="header-container">
        <a href="/" className="homePageLink">
          <div className="logo--container">
            <img className="logo" src={logo} alt="Guifaffinity icon" />
            <h1>GUIFAFFINITY</h1>
          </div>
        </a>
      </div>
      <div className="trending-title-container">
        <img className="trending-icon" src={icon} alt="trending icon" />
        <h2>Los guif más trendings del momento</h2>
      </div>
    </>
  );
};

export default Header;
