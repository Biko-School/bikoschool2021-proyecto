export const GetAllMemes =
  ({ memeRepository }: any) =>
  async () =>
    memeRepository.all();
