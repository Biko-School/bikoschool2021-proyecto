import { memeRepository } from 'core/domain/model/Meme/MemeRepository';
import { GetAllMemes } from './GetAllMemes';
import { FilterMemes } from './FilterMemes';

export const MemeService = {
  all: GetAllMemes({ memeRepository }),
  filterMemes: FilterMemes(),
};
