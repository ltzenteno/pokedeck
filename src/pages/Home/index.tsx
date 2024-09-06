import { Link } from 'react-router-dom';
import List from '../../components/List';
import Paginator from '../../components/paginator';
import SearchBar from '../../components/SearchBar/ndex';
import { usePokemons } from './hooks/usePokemons';
import { useFavorites } from '../Favorites/hooks/useFavorites';

const Home: React.FC = () => {
  const { items, text, setText, search, clear, handlePagination, currentPage } = usePokemons();
  const { favorites } = useFavorites();
  return (
    <div className="py-6 px-24">
      <div>
        <SearchBar
          clear={clear}
          disabled={text.length === 0}
          setText={setText}
          submit={search}
          text={text}
        />
      </div>
      <div className="py-6">
        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="/favorites">See favorites ({favorites.length})</Link>
      </div>
      <div>
        <List
          headers={['name', '', 'favorite']}
          items={items}
          canManageFavorite
        />
      </div>
      <div className="mt-8 text-center">
        <Paginator
          currentPage={currentPage}
          handleNext={handlePagination}
          handlePrevious={handlePagination}
        />
      </div>
    </div>
  );
};

export default Home;
