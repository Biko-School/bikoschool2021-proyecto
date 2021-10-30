import { Image } from "image";
export interface Meme {
  id: string;
  type: string;
  slug: string;
  giphyUrl: string;
  title: string;
  source_tld: string;
  source_post_url: string;
  import_datetime: Date;
  username: string;
  images: {
    original: Image;
    small: Image;
  };
  tags: string[];
}
