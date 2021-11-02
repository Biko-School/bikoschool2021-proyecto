export interface DatabaseSchema {
    memes: Meme[];
}
interface Meme { 
    giphyUrl: string;
    id: string;
    title: string;
    tags: string[];
}

