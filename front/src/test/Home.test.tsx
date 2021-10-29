import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { memes } from '../memes.json'

describe('Home page', () => {
    /* it('no se muestran memes', async() => {
        render(<Home />)
        expect(await screen.findByText('Ha habido un error. Memes no disponibles.')).toBeInTheDocument()
    }) */

    it('se muestra un meme', () => {
        render(<Home />)
        expect(screen.getByAltText(memes[0].name)).toBeInTheDocument()
    })

    it('se muestra una lista de memes', () => {
        render(<Home />)
        memes.map(meme =>  (
            expect(screen.getByAltText(meme.name)).toBeInTheDocument()
        ))
    })
})