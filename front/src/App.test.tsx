import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe ('App', () => {
  it('get Hello World', () => {
    render (<App />)
    expect (screen.getByText("Hello World!")).toBeInTheDocument()
  })
})
