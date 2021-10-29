import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import memes from './memes.json'

describe ('App', () => {

  it('found memes list',async () => {
    render (<App />)
    const memesTitle = memes.map((meme) => {
      const title = meme.title
      return title
    })
    for (let meme of memesTitle){
      expect (await screen.findByText(meme)).toBeInTheDocument()
    }
  })
})