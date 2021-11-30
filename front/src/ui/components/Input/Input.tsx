import { ChangeEventHandler } from "react";
import "./Input.css";

interface InputProps {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ placeholder, onChange }: InputProps) => (
  <input className="input" placeholder={placeholder} onChange={onChange} />
);
