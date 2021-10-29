import React from 'react';
import { Home } from './Home';
import { render, screen } from '@testing-library/react';
import {rest} from 'msw'
import gifs from './../../gif.json';
import { server } from '../../mocks/server';

describe('show 50 gifs', () => {

  it('show error when no gifs', async () => {

    server.use(
      rest.get('http://api.bikoschool.dev/gifs', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({error: 'Server Error'}));
      })
    )
  
    render(<Home />);
    const errorElement = await screen.findByText(
      /No se han podido mostrar los gifs./i
    );

    expect(errorElement).toBeInTheDocument();
  });

  it('show json gifs', async () => {
    render(<Home />);
    const gifElements = await screen.findAllByRole('img');

    for (let i = 0; i < gifs.length; i++) {
      expect(gifElements[i]).toHaveAttribute('alt', gifs[i].title);
    }
  });
});
