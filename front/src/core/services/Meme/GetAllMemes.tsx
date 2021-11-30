export const GetAllMemes =
  ({ memeRepository }) =>
  async () =>
    memeRepository.all();
