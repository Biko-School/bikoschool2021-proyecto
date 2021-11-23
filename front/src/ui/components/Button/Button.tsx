import { MouseEventHandler } from "react";
import "./Button.css";
interface ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ onClick }: ButtonProps) => (
    <button className = "btn" onClick = { onClick }> </button>
)