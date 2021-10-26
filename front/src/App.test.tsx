import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Show 50 gifs', () => {
  it('show error when no gifs', () => {
    render(<App />);
    const errorElement = screen.getByText(/No se han podido mostrar los gifs./i);
    expect(errorElement).toBeInTheDocument();
  });

  it('show 2 gifs', () => {
    render(<App />);
    const gifElement = screen.getAllByRole('img');
    const xboxElement = gifElement[0]
    const eatnparkElement = gifElement[1]
    expect(xboxElement).toHaveAttribute('alt', 'xbox-retro-tape-mixtape');
    expect(eatnparkElement).toHaveAttribute('alt', 'eatnpark');
  });
})