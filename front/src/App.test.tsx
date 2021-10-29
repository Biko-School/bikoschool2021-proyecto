import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import memes from './memes.json'

describe ('App', () => {

  it('find memes images', async () => {
    render (<App />)
    for (let meme of memes){
      expect (await screen.findByAltText(meme.title)).toHaveAttribute('src', meme.img);
    }
  })
})