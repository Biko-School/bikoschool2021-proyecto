import { render, fireEvent, screen } from '@testing-library/react';
import Home from '../Home';

describe('Searchbar in home page', () => {
	it('Término de búsqueda tiene una longitud mínima de 3 caracteres', () => {
		render(<Home />);

		const search = screen.getByPlaceholderText('buscador');
		fireEvent.change(search, { target: { value: '2355' } });
		expect(search.attributes[3].value.length).toBeGreaterThan(3);
	});
});
