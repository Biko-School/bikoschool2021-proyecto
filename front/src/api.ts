export const api = {
  memes: async () => {
    const response = await fetch("/api/memes");
    return response.json();
  },
};
