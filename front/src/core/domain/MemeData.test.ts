import { Meme } from "./MemeData";
import memes from '../../../../material/db.json'

describe('Meme', () => {

    it('Has meme values', () => {
        const meme = new Meme(memes[0])

        expect(meme.id).toBe("YleuWir5NTNVXkflSp")
        expect(meme.slug).toBe("moodman-movie-brazil-the-YleuWir5NTNVXkflSp")
        expect(meme.giphyUrl).toBe("https://giphy.com/gifs/moodman-movie-brazil-the-YleuWir5NTNVXkflSp")
        expect(meme.title).toBe("Movie Brazil GIF by MOODMAN")

    })

})