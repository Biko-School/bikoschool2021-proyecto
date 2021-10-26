import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('must render a meme', () => {
  render(<App alt={"Happy Birthday GIF by Kevin Ross"} src={""}/>);
  const memeItem = screen.getByRole('img',{name: 'Happy Birthday GIF by Kevin Ross'});
  expect(memeItem).toBeInTheDocument();
});
