import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('show error when no gifs', () => {
  render(<App />);
  const errorElement = screen.getByText(/No se han podido mostrar los gifs./i);
  expect(errorElement).toBeInTheDocument();
});