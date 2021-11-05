export interface DatabaseSchema {
  memes: DatabaseMeme[];
}

export interface DatabaseMeme {
  id: string;
  type: string;
  slug: string;
  giphyUrl: string;
  title: string;
  source_tld: string;
  source_post_url: string;
  import_datetime: string;
  username: string;
  images: DatabaseImages;
  tags: string[];
}

export interface DatabaseImages {
  original: DatabaseImageOriginal;
  small: DatabaseImageSmall;
}

export interface DatabaseImageOriginal {
  width: string;
  height: string;
  url: string;
}

export interface DatabaseImageSmall {
  width: string;
  height: string;
  url: string;
}
