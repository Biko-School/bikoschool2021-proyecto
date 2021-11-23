import React from "react";
import "./TitlePage.css";
import Arrow from "./Arrow.svg";

export const TitlePage: React.FC = () => {
  return (
    <>
      <div className="titlePage">
        <div className="arrowImage">
          <img src={Arrow} alt="ArrowLogo"></img>
        </div>
        <div className="titlePage__Name">
          Los guifs más trendings del momento
        </div>
      </div>
    </>
  );
};
