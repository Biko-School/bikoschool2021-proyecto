import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../Home';
import memes from '../memes.json';

describe('Home page', () => {
	it('se muestra una lista de memes', async () => {
		render(<Home />);
		memes.map(async (meme) => {
			expect(await screen.findByAltText(meme.name)).toBeInTheDocument();
		});
	});

	it('si el usuario escribe menos de 3 caracteres mostrar error', () => {
		render(<Home />);

		const search = screen.getByPlaceholderText('buscador');
		fireEvent.change(search, { target: { value: 'mo' } });

		expect(screen.getByText('La longitud mínima de búsqueda son 3 caracteres.')).toBeInTheDocument();
	});

	it('se muestran los memes filtrados cuyos tags coinciden exactamente con el valor exacto introducido por el usuario', async () => {
		render(<Home />);

		const search = screen.getByPlaceholderText('buscador');
		fireEvent.change(search, { target: { value: 'humor' } });

		expect(await screen.findAllByRole('img')).toHaveLength(1);
	});
});
