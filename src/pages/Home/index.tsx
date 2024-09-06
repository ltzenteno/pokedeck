import { Link } from 'react-router-dom';
import List from '../../components/List';
import Paginator from '../../components/paginator';
import SearchBar from '../../components/SearchBar/ndex';
import { usePokemons } from './hooks/usePokemons';
import { useFavorites } from '../Favorites/hooks/useFavorites';
import Alert from '../../components/Alert';
import ListSkeleton from '../../components/ListSkeleton';

const Home: React.FC = () => {
  const {
    items,
    text,
    setText,
    search,
    clear,
    handlePagination,
    currentPage,
    paginatedError,
    isLoading,
  } = usePokemons();
  const { favorites } = useFavorites();

  const displayList = () => {
    if (paginatedError?.message) {
      return (
        <div>
          <Alert
            message={paginatedError.message}
            description={paginatedError.description}
          />
        </div>
      );
    }

    return (
      <>
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
      </>
    );
  };

  return (
    <div className="py-6 px-24">
      <div>
        <SearchBar
          clear={clear}
          disabled={text.trim().length === 0}
          setText={setText}
          submit={search}
          text={text}
        />
      </div>
      <div className="py-6">
        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="/favorites">See favorites ({favorites.length})</Link>
      </div>
      {isLoading && (
        <ListSkeleton />
      )}
      {!isLoading && displayList()}
    </div>
  );
};

export default Home;
