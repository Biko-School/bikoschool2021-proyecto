import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

/*test('renders the title guifaffinity', () => {
  render(<App />);
  const titleElement = screen.getByText(/guifaffinit/i);
  expect(titleElement).toBeInTheDocument();
});*/


describe('Guifaffinity', () => {
  it('renders the title guifaffinity', () => {
    render(<App />)

    expect(screen.getByText(/guifaffinity/i)).toBeInTheDocument()
  })

  it('There is a meme on the page', () => {
    render(<App/>)

    expect(screen.getByText(/Soy un meme/i)).toBeInTheDocument()
  })

  it('There is not a meme on the page', () => {
    render(<App/>)
    

    expect(screen.getByText(/No hay memes/i)).toBeInTheDocument()
  })
})

