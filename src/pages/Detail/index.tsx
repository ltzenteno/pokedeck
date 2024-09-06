import { Link } from 'react-router-dom';
import { useDetail } from './hooks/useDetail';

const Detail: React.FC = () => {
  const { selectedPokemon } = useDetail();

  if (!selectedPokemon) {
    return 'not found';
  }

  return (
    <div className="py-6 px-24">
      <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="/">Go Back</Link>
      <h1 className="font-bold text-lg uppercase">{ selectedPokemon.name }</h1>
      <img
        src={selectedPokemon.sprites.front_default}
        alt={selectedPokemon.name}
      />
      <div className="flex gap-10 p-4">
        <h3 className="capitalize">types:</h3>
        <ul className="text-sm text-gray-500">
          {selectedPokemon.types.map((t, i) => (
            <li key={i}>{t.type.name}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-10 p-4">
        <h3 className="capitalize">abilities:</h3>
        <ul className="text-sm text-gray-500">
          {selectedPokemon.abilities.map((a, i) => (
            <li key={i}>{a.ability.name}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-10 p-4">
        <h3 className="capitalize">stats:</h3>
        <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">name</th>
              <th scope="col" className="px-6 py-3">base stat</th>
              <th scope="col" className="px-6 py-3">effort</th>
            </tr>
          </thead>
          <tbody>
            {selectedPokemon.stats.map((s, i) => (
              <tr key={i}>
                  <td>{s.stat.name}</td>
                  <td>{s.base_stat}</td>
                  <td>{s.effort}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-10 p-4">
        <h3 className="capitalize">evo chain:</h3>
      </div>
    </div>
  );
};

export default Detail;
