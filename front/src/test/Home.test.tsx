import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { memes } from '../memes.json';

describe('Home page', () => {
	/* it('no se muestran memes', async() => {
        render(<Home />)
        expect(await screen.findByText('Ha habido un error. Memes no disponibles.')).toBeInTheDocument()
    }) */

	it('se muestra un meme', async () => {
		render(<Home />);
		expect(await screen.findByAltText(memes[0].name)).toBeInTheDocument();
	});

	it('se muestra una lista de memes', async () => {
		render(<Home />);
		memes.map(async (meme) => {
			expect(await screen.findByAltText(meme.name)).toBeInTheDocument();
		});
	});
});
