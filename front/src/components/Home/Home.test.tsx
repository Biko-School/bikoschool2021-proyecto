import { Home } from './Home';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import memes from './../../memes.json';
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
    for (let i = 0; i < memes.length; i++) {
      await screen.findByTestId(memes[i].id);
    }
  });
});

describe('Funcionamiento de la búsqueda de memes', () => {
  let searchInput: any;

  beforeEach(async () => {
    render(<Home />);

    searchInput = await screen.findByPlaceholderText(
      '¿Qué quieres buscar? ¡Encuéntralo!'
    );
  });

  it('Al escribir "re" muestra todos los memes porque la búsqueda solo funciona a partir de 3 caracteres', async () => {
    const userSearch = 're';

    userEvent.type(searchInput, userSearch);

    for (let i = 0; i < memes.length; i++) {
      await screen.findByTestId(memes[i].id);
    }
  });

  it('Al escribir "retro" muestra los memes que tienen la tag "retro"', async () => {
    const userSearchString = 'retro';
    const memeID = 'k4N5AuZzd9bmo';

    userEvent.type(searchInput, userSearchString);

    await screen.findAllByTestId(memeID);
  });

  it('Al escribir "ret" muestra los memes que tienen tags que contienen "ret"', async () => {
    const userSearchString = 'ret';
    const memeID = 'k4N5AuZzd9bmo';

    userEvent.type(searchInput, userSearchString);

    await screen.findAllByTestId(memeID);
  });

  it('Al escribir " zil    th  " muestra los memes que tienen tags que contienen "zil th"', async () => {
    const userSearchString = ' zil    th  ';
    const memeID = 'YleuWir5NTNVXkflSp';

    userEvent.type(searchInput, userSearchString);

    await screen.findAllByTestId(memeID);
  });
});
