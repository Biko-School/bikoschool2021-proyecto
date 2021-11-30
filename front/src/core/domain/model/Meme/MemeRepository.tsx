import { ApiMemeRepository } from '../../../infastructure/domain/model/Meme/ApiMemeRepository';

export const MemeRepository = {
  all: () => Promise.reject('[MemeRepository#all] must be implemented'),
};

export const memeRepository = Object.assign(
  {},
  MemeRepository,
  ApiMemeRepository
);
