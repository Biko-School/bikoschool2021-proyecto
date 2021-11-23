import React from "react";
import "./Header.css";

export const Header: React.VFC<{}> = ({}) => {
  return (
    <div className="header-container">
      {" "}
      <img src="Logo.png" alt="" /> <h1>GUIFAFFINITY</h1>
    </div>
  );
};

export default Header;
