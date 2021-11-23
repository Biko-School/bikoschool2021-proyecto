import { ChangeEventHandler } from "react";
import "./Input.css";

interface InputProps {
    placeholder: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({ placeholder, value, onChange }: InputProps) => (
    <input
        className = "input"
        value = { value }
        placeholder = { placeholder }
        onChange = { onChange }
    />
)