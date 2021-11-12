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
  images: {
    original: {
      width: string;
      height: string;
      url: string;
    };
    small: {
      width: string;
      height: string;
      url: string;
    };
  };
  tags: string[];
}
