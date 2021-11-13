import { Meme } from "../../../api/src/DatabaseSchema";

const getMeme: Meme = () => {
  return {
    title: "irrelevant",
    id: "irrelevant",
    urlOriginal:
      "https://media3.giphy.com/media/srYJjOhpgK4eZE6sw9/giphy.gif?cid=ecf05e47666266966085986452224bd17cfe84353cb3e0c5&rid=giphy.gif&ct=g",
    urlSmall:
      "https://media3.giphy.com/media/srYJjOhpgK4eZE6sw9/giphy.gif?cid=ecf05e47666266966085986452224bd17cfe84353cb3e0c5&rid=giphy.gif&ct=g",
    import_datetime: "irrelevant",
    tags: ["gh", "gf"],
  };
};

const api = {
  memes: async () => {
    const response = await fetch("/api/meme");
    return response.json();
  },
};

export const memeService = {
  getMeme,
  api,
};
