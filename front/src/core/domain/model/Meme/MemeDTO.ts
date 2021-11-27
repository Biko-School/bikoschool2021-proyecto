import { Image } from "./Image";

export interface MemeDTO {
  id: string;
  type: string;
  slug: string;
  giphyUrl: string;
  title: string;
  surce_tld: string;
  surce_post_tld: string;
  import_datetime: Date;
  username: string;
  images: { original: Image; small: Image };
  tags: string[];
}
