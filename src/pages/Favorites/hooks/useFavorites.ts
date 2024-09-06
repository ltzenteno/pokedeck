import { useAppSelector } from '../../../store';

export const useFavorites = () => {
  const favorites = useAppSelector((state) => state.pokemon.favorites);

  return {
    favorites,
  };
};
