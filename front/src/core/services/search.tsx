import React, { ChangeEvent } from 'react';

interface Props {
    onFilter: (value: string) => void
}

function Search({onFilter}: Props) {
    let name: string;
    

    const handleChange = (event: ChangeEvent<HTMLInputElement> ) => (
        name = event.target.value,
        console.log(name)
    )

    return (
       <div>
            <input type="text" onChange={handleChange}></input>
            <button onClick={() => onFilter(name)}>buscar</button>
       </div>
    )}

export default Search;