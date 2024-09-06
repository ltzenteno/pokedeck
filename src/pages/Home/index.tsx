import List from '../../components/List';
import Paginator from '../../components/paginator';
import SearchBar from '../../components/SearchBar/ndex';
import { usePokemons } from './hooks/usePokemons';

const Home: React.FC = () => {
  const { items, text, setText, search, clear } = usePokemons();
  return (
    <div>
      <div>
        <SearchBar
          clear={clear}
          disabled={text.length === 0}
          setText={setText}
          submit={search}
          text={text}
        />
      </div>
      <List items={items} />
      <Paginator />
    </div>
  );
};

export default Home;
