import { Home } from './Home';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import gifs from './../../gif.json';
import { server } from '../../mocks/server';
import userEvent from '@testing-library/user-event';

describe('Funcionamiento de la página principal', () => {
  it('Muestra un texto "Cargando" mientras los memes cargan', async () => {
    render(<Home />);
    const searchInput = await screen.findByText(/Cargando.../i);
    await waitFor(() => {
      expect(searchInput).toBeInTheDocument();
    });
  });

  it('Muestra un mensaje de error cuando la solicitud no carga', async () => {
    server.use(
      rest.get('http://localhost:4200/api/memes', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'Server Error' }));
      })
    );

    render(<Home />);
    const errorElement = await screen.findByText(
      /No se han podido mostrar los gifs./i
    );

    await waitFor(() => {
      expect(errorElement).toBeInTheDocument();
    });
  });

  it('Muestra los 50 memes más trending del momento en la página principal', async () => {
    render(<Home />);
    for (let i = 0; i < gifs.length; i++) {
      await screen.findByRole('img', { name: gifs[i].title });
    }
  });
});

describe('Funcionamiento de la búsqueda de memes', () => {
  it('Muestra un input para buscar', async () => {
    render(<Home />);

    const searchInput = await screen.findByPlaceholderText(
      '¿Qué quieres buscar? ¡Encuéntralo!'
    );

    await waitFor(() => {
      expect(searchInput).toBeInTheDocument();
    });
  });

  it('Se puede escribir en el input', async () => {
    const inputValue = 'hola';

    render(<Home />);

    const searchInput = await screen.findByPlaceholderText(
      '¿Qué quieres buscar? ¡Encuéntralo!'
    );

    userEvent.type(searchInput, inputValue);

    await waitFor(() => {
      expect(searchInput).toHaveValue(inputValue);
    });
  });

  it('Al escribir "retro" muestra el meme que coincide con la búsqueda', async () => {
    const userSearchRegExp = /retro/i;
    const userSearchString = 'retro';
    render(<Home />);

    const searchInput = await screen.findByPlaceholderText(
      '¿Qué quieres buscar? ¡Encuéntralo!'
    );

    userEvent.type(searchInput, userSearchString);

    const filterMeme = await screen.findAllByRole('img', {
      name: userSearchRegExp,
    });

    await waitFor(() => {
      expect(filterMeme).toHaveLength(1);
    });
  });

  it('Al escribir "re" muestra todos los memes porque la búsqueda solo funciona a partir de 3 caracteres', async () => {
    const userSearchRegExp = /re/i;
    const userSearchString = 're';
    render(<Home />);

    const searchInput = await screen.findByPlaceholderText(
      '¿Qué quieres buscar? ¡Encuéntralo!'
    );

    userEvent.type(searchInput, userSearchString);

    const filterMeme = await screen.findAllByRole('img', {
      name: userSearchRegExp,
    });

    await waitFor(() => {
      expect(filterMeme).toHaveLength(2);
    });
  });
});
