export const api = {
  memes: async () => {
    const response = await fetch("http://localhost:3000/api/memes");
    return response.json();
  },
};
