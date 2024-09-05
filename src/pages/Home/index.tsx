import List from '../../components/List';
import Paginator from '../../components/paginator';
import { usePokemons } from './hooks/usePokemons';

const Home: React.FC = () => {
  const { items } = usePokemons();
  return (
    <div>
      <List items={items} />
      <Paginator />
    </div>
  );
};

export default Home;
