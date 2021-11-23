import { MouseEventHandler } from "react";
import "./Button.css";
import lens from "../../../images/Lens.png";
interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ onClick }: ButtonProps) => (
  <button className="btn" onClick={onClick}>
    <img src={lens} alt="Lens" width="25px" height="25px" />
  </button>
);
