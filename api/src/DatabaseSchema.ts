export interface DatabaseSchema {
  memes: Meme[];
}

export interface Meme {
  id: string;
  type: string;
  slug: string;
  giphyUrl: string;
  title: string;
  source_tld: string;
  source_post_url: string;
  import_datetime: string;
  username: string;
  images: Images;
  tags: string[];
}

export interface Images {
  original: ImageOriginal;
  small: ImageSmall;
}

export interface ImageOriginal {
  width: string;
  height: string;
  url: string;
}

export interface ImageSmall {
  width: string;
  height: string;
  url: string;
}
