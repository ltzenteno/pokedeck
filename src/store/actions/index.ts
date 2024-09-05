import { createAsyncThunk } from '@reduxjs/toolkit';
import keyBy from 'lodash.keyby';
import { fetchDetail, fetchPokemons } from '../../api';
import { PageResponse, PokemonDetail, PokemonItem } from '../../types';
import { RootState } from '..';
import { setIsLoading, setPaginatedPokemons } from '../slices/pokemonSlice';

export const getPaginatedPokemons = createAsyncThunk<
  PageResponse<PokemonItem>,
  { page: number },
  { state: RootState }
>('getPaginatedPokemons', async ({ page }: { page: number }, { dispatch }) => {
  dispatch(setIsLoading(true));
  const response = await fetchPokemons({ page });

  // fetch details for this page
  const promises: Promise<PokemonDetail>[] = [];
  response.results.forEach((item) => {
    promises.push(fetchDetail({ name: item.name }));
  });

  const details = await Promise.all(promises);
  const keyed = keyBy(details, 'name');
  const updatedList = response.results.map((item) => {
    return {
      ...item,
      detail: keyed[item.name],
    };
  });

  dispatch(setPaginatedPokemons({
    ...response,
    results: updatedList,
  }));
  dispatch(setIsLoading(false));

  return response;
});
