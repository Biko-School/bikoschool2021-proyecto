const fetchMemes = async () => {
  const response = await fetch("http://localhost:3010/api/memes");
  const memes = await response.json();

  return memes;
};

export default fetchMemes;
