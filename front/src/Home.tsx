import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import { Meme } from './domain/Meme';
import { ApiMemesRepository } from './infrastructure/ApiMemeRepository';
import { MemeService } from './services/MemeService';
import './styles/home.css';

function Home() {
	const [memes, setMemes] = useState<Meme[]>();
	const [value, setValue] = useState('');
	const [error, setError] = useState('');
	const filteredMemes =
		value.length > 3
			? memes?.filter((meme) =>
					meme.tags.some((tag) =>
						tag.includes(
							value
								.trim()
								.replace(/\s{1,}\s/g, ' ')
								.toLowerCase()
						)
					)
			  )
			: memes;

	useEffect(() => {
		const memeService = new MemeService(new ApiMemesRepository());
		memeService.getMemes().then((memes) => setMemes(memes));
	}, []);

	const onSearchHandler = (value: string) => {
		const inputWithoutInitialSpaces = value.trim().replace(/\s{1,}\s/g, ' ');
		console.log(inputWithoutInitialSpaces.length);
		if (inputWithoutInitialSpaces.length <= 3 && inputWithoutInitialSpaces.length > 0) {
			setError('La longitud mínima de búsqueda son 3 caracteres.');
		} else {
			setError('');
		}
		setValue(value);
	};

	return (
		<div className="home">
			<Searchbar onChange={(e) => onSearchHandler(e.target.value)} value={value} />
			<div>{error}</div>
			{filteredMemes?.map((meme) => (
				<img src={meme?.image} key={meme?.id} alt={meme?.name} />
			))}
		</div>
	);
}

export default Home;
