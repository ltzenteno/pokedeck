import { Link } from 'react-router-dom';
import { PokemonItem } from '../../types';

export interface ListItemProps {
  item: PokemonItem;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const { name } = item;
  return (
    <div>
      <Link to={`/detail/${name}`}>
        <p>{name}</p>
        <img src={item.detail?.sprites.front_default} alt={name} />
      </Link>
    </div>
  );
};

export default ListItem;