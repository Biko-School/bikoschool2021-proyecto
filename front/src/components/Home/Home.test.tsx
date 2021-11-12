import React from 'react';
import { Home } from './Home';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import gifs from './../../gif.json';
import { server } from '../../mocks/server';

describe('show 50 gifs', () => {
  it('show loading', async () => {
    render(<Home />);
    const loadingElement = await screen.findByText(/Cargando.../i);

    expect(loadingElement).toBeInTheDocument();
  });

  it('show error when api gives error', async () => {
    server.use(
      rest.get('http://localhost:4200/api/memes', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'Server Error' }));
      })
    );

    render(<Home />);
    const errorElement = await screen.findByText(
      /No se han podido mostrar los gifs./i
    );

    expect(errorElement).toBeInTheDocument();
  });

  it('Muestra los 50 memes más trending del momento en la página principal', async () => {
    render(<Home />);

    for (let i = 0; i < gifs.length; i++) {
      await screen.findByRole('img', { name: gifs[i].title });
    }
  });
});
