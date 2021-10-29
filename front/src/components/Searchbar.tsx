import React, { ChangeEventHandler } from 'react';
import '../styles/searchbar.css';

interface Props {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

const Searchbar = ({ value, onChange }: Props) => (
	<input
		type="text"
		className="searchbar"
		placeholder="buscador"
		onChange={onChange}
		value={value}
	/>
);

export default Searchbar;
