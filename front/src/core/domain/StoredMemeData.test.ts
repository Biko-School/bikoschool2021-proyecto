import { StoredMemeData } from "./StoredMemeData";
import db from '../../../../material/db.json'

describe('Meme', () => {

    it('Has meme values', () => {

        const databaseStoredMemeData : StoredMemeData =db.memes[0]


        expect(databaseStoredMemeData.id).toBe("YleuWir5NTNVXkflSp")
        expect(databaseStoredMemeData.slug).toBe("moodman-movie-brazil-the-YleuWir5NTNVXkflSp")
        expect(databaseStoredMemeData.giphyUrl).toBe("https://giphy.com/gifs/moodman-movie-brazil-the-YleuWir5NTNVXkflSp")
        expect(databaseStoredMemeData.title).toBe("Movie Brazil GIF by MOODMAN")

    })
    it('Has original & small images Urls', ()=>{

        const databaseStoredMemeData : StoredMemeData =db.memes[0]
        expect(databaseStoredMemeData.images.original.url).toContain("be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789")
        expect(databaseStoredMemeData.images.small.url).toContain("200w.gif")
    })

})