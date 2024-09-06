import List from '../../components/List';
import Paginator from '../../components/paginator';
import SearchBar from '../../components/SearchBar/ndex';
import { usePokemons } from './hooks/usePokemons';

const Home: React.FC = () => {
  const { items, text, setText, search } = usePokemons();
  return (
    <div>
      <div>
        <SearchBar
          text={text}
          setText={setText}
          submit={search}
          disabled={text.length === 0}
        />
      </div>
      <List items={items} />
      <Paginator />
    </div>
  );
};

export default Home;
