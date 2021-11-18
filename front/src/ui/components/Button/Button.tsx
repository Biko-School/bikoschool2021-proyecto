import { MouseEventHandler } from "react";

interface ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ onClick }: ButtonProps) => (
    <button className = "App__SearchBar--button" onClick = { onClick }> </button>
)

export default Button;