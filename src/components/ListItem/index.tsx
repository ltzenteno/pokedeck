import { Link } from 'react-router-dom';
import { PokemonDetail } from '../../types';

export interface ListItemProps {
  item: PokemonDetail;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const { name } = item;
  return (
    <div>
      <Link to={`/detail/${name}`}>
        <p>{name}</p>
        <img src={item.sprites.front_default} alt={name} />
      </Link>
    </div>
  );
};

export default ListItem;