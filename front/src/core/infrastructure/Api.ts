import Meme from '../domain/Meme'
import MemeRepository from '../domain/MemeRepository'

export const api : MemeRepository= {
  getAllMemes: async (): Promise<Meme[]> => {
    const response = await fetch("http://localhost:3000/api/memes");
    const allMemesData : StoredMemeData[] = await( response.json());

    let memeArray : Meme[] = [];

    for (let i in allMemesData){
      memeArray.push({
        "id": allMemesData[i].id,
        "title" : allMemesData[i].title,
        "username" : allMemesData[i].username,
        "tags": allMemesData[i].tags,
        "width": allMemesData[i].images.original.width,
        "height": allMemesData[i].images.original.height,
        "url": allMemesData[i].images.original.url,

      })
    }
    return memeArray;
  },
};

export default api;

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

export interface dbImages{
  original : dbImagesDimensionsAndUrl,
  small : dbImagesDimensionsAndUrl,
}

export interface dbImagesDimensionsAndUrl{
  width : string,
  height : string,
  url : string,
}