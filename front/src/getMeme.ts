const getMeme: any = () => {
  return {
    title: "irrelevant",
    src: "https://media3.giphy.com/media/srYJjOhpgK4eZE6sw9/giphy.gif?cid=ecf05e47666266966085986452224bd17cfe84353cb3e0c5&rid=giphy.gif&ct=g",
    altTag: "irrelevant",
    identifier: "irrelevant",
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
