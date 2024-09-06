import List from '../../components/List';
import { useFavorites } from './hooks/useFavorites';

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();
  return (
    <div className="py-6 px-24">
      <h1>Favorites</h1>
      <List
        headers={['name', '', '']}
        items={favorites}
      />
    </div>
  )
};

export default Favorites;
