import { PokemonDetail } from '../../types';
import ListItem from '../ListItem';

export interface ListProps {
  items: PokemonDetail[];
  canManageFavorite?: boolean;
}

const List: React.FC<ListProps> = ({
  items,
  canManageFavorite = false,
}) => {
  return (
    <div>
      {items.map((pokemon, index) => (
        <ListItem
          key={index}
          item={pokemon}
          canManageFavorite={canManageFavorite}
        />
      ))}
    </div>
  );
};

export default List;
