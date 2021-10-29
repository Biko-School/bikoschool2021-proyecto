export const api = {
    memes: async () => {
        const response = await fetch('/memes');
        return response.json()
    }
}