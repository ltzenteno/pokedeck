import { PageResponse, PokemonDetail, PokemonItem } from '../types';

const API_URL = import.meta.env.VITE_API_URL || '';
const LIMIT = 20;

export const fetchPokemons = async ({
  page = 1,
}: {
  page: number;
}): Promise<PageResponse<PokemonItem>> => {
  const offset = 20 * page;
  const response = await fetch(`${API_URL}/pokemon/?limit=${LIMIT}&offset=${offset}`);

  return (await response.json()) as PageResponse<PokemonItem>;
};

export const fetchDetail = async ({
  name,
}: {
  name: string;
}): Promise<PokemonDetail> => {
  const response = await fetch(`${API_URL}/pokemon/${name}`);

  return (await response.json()) as PokemonDetail;
};