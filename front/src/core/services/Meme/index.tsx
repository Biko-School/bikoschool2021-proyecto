import { GetAllMemes } from './GetAllMemes';
import { memeRepository } from 'core/domain/model/Meme/MemeRepository';

export const MemeService = {
  all: GetAllMemes({ memeRepository }),
};
