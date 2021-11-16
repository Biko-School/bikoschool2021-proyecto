import React from "react";
import GuifaniffinityLogo from "./GuifaffinityLogo.svg";

export const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div>guifaffinity</div>
        <img src={GuifaniffinityLogo} alt="GuifaniffinityLogo"></img>
      </header>
    </>
  );
};
