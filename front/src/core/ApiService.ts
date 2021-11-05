export const api = {
  memes: async () => {
    const response = await fetch("http://192.168.2.38:3000/api/memes");
    return response.json();
  },
};
