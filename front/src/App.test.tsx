import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import memes from './memes.json'

describe ('App', () => {

  it('found memes list', () => {
    render (<App />)
    for (let meme of memes.results){    
      expect (screen.getByText(meme.title)).toBeInTheDocument()
    }
  })


})
