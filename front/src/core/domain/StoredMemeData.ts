import { dbImages} from "./DbImages"


export interface StoredMemeData{
  id:string,
  type : string,
  slug :string,
  giphyUrl : string,
  title:string,
  source_tld : string,
  source_post_url: string,
  import_datetime : string,
  username : string,
  images : dbImages,
  tags : string[],

}
