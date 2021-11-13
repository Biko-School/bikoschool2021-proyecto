import { StoredMemeData } from "../domain/StoredMemeData";

export const api = {
  memes: async (): Promise<StoredMemeData[]> => {
    const response = await fetch("http://localhost:3000/api/memes");
    return response.json();
  },
};
