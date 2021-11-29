export interface DataBaseSchema {
  memes: Meme[];
}
interface Meme {
  id: string;
  title: string;
  images: { original: { url: string } };
  tags: string[];
}
