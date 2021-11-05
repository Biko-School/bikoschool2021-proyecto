import Image from "./Image";

export default interface Meme {
  id: string;
  type: string;
  slug: string;
  giphyUrl: string;
  title: string;
  source_tld: string;
  source_post_url: string;
  import_datetime: string;
  username: string;
  images: {
    original: Image;
    small: Image;
  };
  tags: string[];
}
