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

  it('Muestra los tags de cada meme', async () => {
    render(<Home />);

    for (let i = 0; i < memes.length; i++) {
      const tags: string = memes[i].tags.join('');
      await screen.findByText(tags);
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

  it('La longitud de un término de búsqueda para que devuelva resultados es de 3 caracteres', async () => {
    const userSearchInput: string = 're';

    userEvent.type(searchInput, userSearchInput);

    for (let i = 0; i < memes.length; i++) {
      await screen.findByTestId(memes[i].id);
    }
  });

  it('Serán parte del resultado de búsqueda aquellos memes con etiqueta idéntica al término de búsqueda', async () => {
    const userSearchInput: string = 'retro';
    const memeToSearchID: string = 'k4N5AuZzd9bmo';

    userEvent.type(searchInput, userSearchInput);

    await screen.findByTestId(memeToSearchID);
  });

  it('Serán parte del resultado de búsqueda aquellos memes donde la etiqueta coincida parcialmente con el término de búsqueda', async () => {
    const userSearchInput: string = 'ret';
    const memeToSearchID: string = 'k4N5AuZzd9bmo';

    userEvent.type(searchInput, userSearchInput);

    await screen.findByTestId(memeToSearchID);
  });

  it('Se ignoran los espacios laterales y los espacios interiores mayores que 1 del término de búsqueda.', async () => {
    const userSearchInput: string = ' zil    th  ';
    const memeToSearchID: string = 'YleuWir5NTNVXkflSp';

    userEvent.type(searchInput, userSearchInput);

    await screen.findByTestId(memeToSearchID);
  });

  it('Se ignoran las mayúsculas y minúsculas', async () => {
    const userSearchInput: string = ' ZiL    tH  ';
    const memeToSearchID: string = 'YleuWir5NTNVXkflSp';

    userEvent.type(searchInput, userSearchInput);

    await screen.findByTestId(memeToSearchID);
  });

  it('El resultado de búsqueda estará ordenado de más a menos reciente', async () => {
    const firstmemeToSearchID: string = 'gg2z9cvyaeP3if9bvA';
    const secondtmemeToSearchID: string = 'd9If6rSSdzmuCuOxIr';
    const thirdtmemeToSearchID: string = 'cmrWgjzThoiLL75mBI';

    const userSearchInput: string = 'sport';

    const memeContainer: HTMLElement = await screen.findByTestId(
      'meme-container'
    );

    userEvent.type(searchInput, userSearchInput);

    const firstMeme = await screen.findByTestId(firstmemeToSearchID);
    const secondMeme = await screen.findByTestId(secondtmemeToSearchID);
    const thirdMeme = await screen.findByTestId(thirdtmemeToSearchID);

    expect(memeContainer.childNodes[0]).toBe(firstMeme);
    expect(memeContainer.childNodes[1]).toBe(secondMeme);
    expect(memeContainer.childNodes[2]).toBe(thirdMeme);
  });
});
