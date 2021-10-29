import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import './styles/home.css';

interface Meme {
	memes: {
		image: string;
		id: string;
		name: string;
	}[];
}

function Home() {
	const [memes, setMemes] = useState<Meme>();
	const [value, setValue] = useState('');

	useEffect(() => {
		fetch('https://memeapi.com/api')
			.then((response) => response.json())
			.then((data) => setMemes(data))
			.catch((error) => console.log(error.message));
	}, []);

	return (
		<div className="home">
			<Searchbar onChange={(e) => setValue(e.target.value)} value={value} />
			{memes?.memes.map((meme) => (
				<img src={meme?.image} key={meme?.id} alt={meme?.name} />
			))}
		</div>
	);
}

export default Home;
