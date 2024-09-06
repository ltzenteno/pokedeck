import List from '../../components/List';
import { useFavorites } from './hooks/useFavorites';

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();
  return (
    <div className="p-6">
      <h1>Favorites</h1>
      <List
        items={favorites}
      />
    </div>
  )
};

export default Favorites;
