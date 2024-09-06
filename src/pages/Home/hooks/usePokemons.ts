import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getPaginatedPokemons } from '../../../store/actions';

export const usePokemons = () => {
  const dispatch = useAppDispatch();
  const paginatedPokemons = useAppSelector((state) => state.pokemon.paginatedPokemons);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    dispatch(getPaginatedPokemons({ page: paginatedPokemons.currentPage }))
  }, [dispatch, paginatedPokemons.currentPage]);

  return {
    items: paginatedPokemons.page.results,
    text,
    setText,
  };
};
