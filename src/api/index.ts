import { PageResponse, PokemonDetail, PokemonItem } from '../types';

const API_URL = import.meta.env.VITE_API_URL || '';
const LIMIT = 20;

export const fetchPokemons = async ({
  page = 1,
  retries = 3,
}: {
  page: number;
  retries?: number;
}): Promise<PageResponse<PokemonItem>> => {
  const offset = LIMIT * page;
  const response = await fetch(`${API_URL}/pokemon/?limit=${LIMIT}&offset=${offset}`);

  if (response.ok) {
    return (await response.json()) as PageResponse<PokemonItem>;
  }

  if (retries > 0) {
    return fetchPokemons({ page, retries: retries - 1 });
  }
  throw new Error(`${response.status}`);
  //throw new Error('Some server error');
};

export const fetchDetail = async ({
  name,
}: {
  name: PokemonDetail['name'];
}): Promise<PokemonDetail> => {
  const response = await fetch(`${API_URL}/pokemon/${name}`);

  return (await response.json()) as PokemonDetail;
};