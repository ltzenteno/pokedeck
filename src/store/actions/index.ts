import { createAsyncThunk } from '@reduxjs/toolkit';
import keyBy from 'lodash.keyby';
import { fetchDetail, fetchPokemons } from '../../api';
import { PokemonDetail } from '../../types';
import { RootState } from '..';
import { setCurrentPage, setDetail, setFilteredPokemons, setHomeError, setIsLoading, setIsLoadingDetail, setPaginatedPokemons } from '../slices/pokemonSlice';

export const getPaginatedPokemons = createAsyncThunk<
  void,
  { page: number },
  { state: RootState }
>('getPaginatedPokemons', async ({ page }: { page: number }, { dispatch }) => {
  dispatch(setIsLoading(true));

  try {
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
        ...keyed[item.name],
      };
    });

    dispatch(setPaginatedPokemons({
      ...response,
      results: updatedList,
    }));
    dispatch(setHomeError());
    dispatch(setCurrentPage(page));
    dispatch(setFilteredPokemons(updatedList));
    dispatch(setIsLoading(false));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setHomeError({
        message: error.message,
        description: 'There is an error fetching the list of Pokemons',
      }));
    } else {
      throw error;
    }
  }
});

export const getDetail = createAsyncThunk<
 PokemonDetail,
 { name: string },
 { state: RootState }
>('getDetail', async ({ name }: { name: string }, { dispatch }) => {
  dispatch(setIsLoadingDetail(true));
  const response = await fetchDetail({ name });

  dispatch(setDetail(response));
  dispatch(setIsLoadingDetail(false));

  return response;
});
