import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
//import getMemes from './getMemes'
import api from "./api.json"
import Home from "../src/screens/home"

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

  it.skip('There is a meme on the page', async () => {
    render(<App/>)
    expect(await screen.findAllByText(/Soy un meme/i)).toBeInTheDocument()
  })

  
  it.skip('There is not a meme on the page', () => {
    render(<App/>)
    
    expect(screen.getByText(/No hay memes/i)).toBeInTheDocument()
  })

  it('The memes array have a length of 50 items', () => {
    expect(api).toHaveLength(50)
  })

  it('There is a meme title', async () => {
    render(<App/>)
    
    for (let meme of api) {
      console.log({meme})
      expect((await screen.findAllByText(meme.title))[0]).toBeInTheDocument()
      
    }
    
  })

  it('There is an img', async () => {
    //render(<Home/>)
    //expect(screen.getByRole('img')).toBeInTheDocument()

    render(<App />)
    for (let meme of api) {
      console.log({meme})
      expect((await screen.findAllByRole('img'))[0]).toBeInTheDocument()
      
    }
  })

})