import List from '../../components/List';
import Paginator from '../../components/paginator';
import SearchBar from '../../components/SearchBar/ndex';
import { usePokemons } from './hooks/usePokemons';

const Home: React.FC = () => {
  const { items, text, setText, search, clear, handlePagination, currentPage } = usePokemons();
  return (
    <div className="p-6">
      <div>
        <SearchBar
          clear={clear}
          disabled={text.length === 0}
          setText={setText}
          submit={search}
          text={text}
        />
      </div>
      <List
        items={items}
        canManageFavorite
      />
      <div className="py-3">
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
