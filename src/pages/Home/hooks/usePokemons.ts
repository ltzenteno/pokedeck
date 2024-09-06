import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getPaginatedPokemons } from '../../../store/actions';
import { setFilteredPokemons } from '../../../store/slices/pokemonSlice';

export const usePokemons = () => {
  const dispatch = useAppDispatch();
  const paginatedPokemons = useAppSelector((state) => state.pokemon.paginatedPokemons);
  const filteredPokemons = useAppSelector((state) => state.pokemon.filteredPokemons);
  const paginatedError = useAppSelector((state) => state.pokemon.paginatedPokemons.error);
  const isLoading = useAppSelector((state) => state.pokemon.paginatedPokemons.isLoading);
  const [text, setText] = useState<string>('');

  const search = () => {
    if (text.length !== 0) {
      const filtered = paginatedPokemons.page.results.filter((item) => item.name.includes(text.trim()));

      dispatch(setFilteredPokemons(filtered));
    } else {
      dispatch(setFilteredPokemons(paginatedPokemons.page.results));
    }
  };

  const clear = () => {
    setText('');
    dispatch(setFilteredPokemons(paginatedPokemons.page.results));
  };

  const handlePagination = (page: number) => {
    dispatch(getPaginatedPokemons({ page }));
  };

  useEffect(() => {
    dispatch(getPaginatedPokemons({ page: paginatedPokemons.currentPage }))
  }, [dispatch, paginatedPokemons.currentPage]);

  return {
    items: filteredPokemons,
    text,
    setText,
    search,
    clear,
    currentPage: paginatedPokemons.currentPage,
    handlePagination,
    paginatedError,
    isLoading,
  };
};
