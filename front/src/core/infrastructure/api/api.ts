export const api = {
  memes: async () => {
    const response = await fetch("/api/memes");
    return response.json();
  },
  memesByTag: async (tag: string) => {
    const response = await fetch(`/api/memesByTag/${tag}`);
    return response.json();
  },
};
