import { Meme } from "../../domain/model/Meme/Meme";
import { MemeDTO } from "../../domain/model/Meme/MemeDTO";

export function memesMapper(memes: MemeDTO[]): Meme[] {
  return memes.map((meme: MemeDTO) => {
    return {
      id: meme.id,
      title: meme.title,
      tags: meme.tags,
      date: meme.import_datetime,
      img: meme.images.original.url,
    };
  });
}
