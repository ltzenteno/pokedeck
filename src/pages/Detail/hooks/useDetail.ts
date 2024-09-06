import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../../store/actions';
import { setDetail } from '../../../store/slices/pokemonSlice';

export const useDetail = () => {
  const dispatch = useAppDispatch();
  const pokemonList = useAppSelector((state) => state.pokemon.paginatedPokemons.page.results);
  const selectedPokemon = useAppSelector((state) => state.pokemon.detail.pokemon);
  const { name } = useParams();

  useEffect(() => {
    // check if selectedPokemon exists either in paginatedPokemons or favorites
    // if not need to fetch it
    const found = pokemonList.find((item) => item.name === name);

    if (!found) {
      dispatch(getDetail({ name: name || '' }));
    } else {
      if (found.detail) {
        dispatch(setDetail(found.detail));
      }
    }
  }, [dispatch, name, pokemonList]);


  return {
    selectedPokemon,
  };
};