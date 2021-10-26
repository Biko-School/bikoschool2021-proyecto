import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import gifs from './gif.json';

describe('Show 50 gifs', () => {
  it('show error when no gifs', () => {
    render(<App />);
    const errorElement = screen.getByText(
      /No se han podido mostrar los gifs./i
    );

    expect(errorElement).toBeInTheDocument();
  });

  it('show json gifs', () => {
    render(<App />);
    const gifElements = screen.getAllByRole('img');

    for (let i = 0; i < gifs.length; i++) {
      expect(gifElements[i]).toHaveAttribute('alt', gifs[i].title);
    }
  });
});
