import { useDetail } from './hooks/useDetail';

const Detail: React.FC = () => {
  const { selectedPokemon } = useDetail();

  if (!selectedPokemon) {
    return 'not found';
  }

  return (
    <div>
      <h1>{ selectedPokemon.name }</h1>
      <img
        src={selectedPokemon.sprites.front_default}
        alt={selectedPokemon.name}
      />
      <div>
        <h3>Types:</h3>
        <ul>
          {selectedPokemon.types.map((t, i) => (
            <li key={i}>{t.type.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>abilities:</h3>
        <ul>
          {selectedPokemon.abilities.map((a, i) => (
            <li key={i}>{a.ability.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>stats:</h3>
        <ul>
          {selectedPokemon.stats.map((s, i) => (
            <li key={i}>
              <div>
                <p>{s.stat.name}</p>
                <span>base stat: {s.base_stat}</span>
                <span>effort: {s.effort}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>evo chain:</h3>
      </div>
    </div>
  );
};

export default Detail;
