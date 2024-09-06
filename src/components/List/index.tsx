import { PokemonDetail } from '../../types';
import ListItem from '../ListItem';

export interface ListProps {
  items: PokemonDetail[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div>
      {items.map((pokemon, index) => (
        <ListItem key={index} item={pokemon} />
      ))}
    </div>
  );
};

export default List;
