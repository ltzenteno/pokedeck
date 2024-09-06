import { useAppDispatch, useAppSelector } from '../../../store';
import { addFavorite, removeFavorite } from '../../../store/slices/pokemonSlice';
import { PokemonDetail } from '../../../types';

export const useFavorites = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.pokemon.favorites);

  const add = (pokemon: PokemonDetail) => {
    dispatch(addFavorite(pokemon));
  }

  const remove = (pokemon: PokemonDetail) => {
    dispatch(removeFavorite(pokemon));
  };

  const isFavorite = (name: string) => {
    const index = favorites.findIndex((item) => item.name === name);

    return index !== -1;
  };

  return {
    favorites,
    add,
    remove,
    isFavorite,
  };
};
