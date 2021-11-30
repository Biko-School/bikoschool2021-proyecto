import axios from 'axios';

const all = async () => {
  return axios.get('http://localhost:4200/api/memes');
};

export const ApiMemeRepository = {
  all,
};
