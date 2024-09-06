import { PokemonDetail } from '../../types';
import ListItem from '../ListItem';

export interface ListProps {
  items: PokemonDetail[];
  canManageFavorite?: boolean;
  headers: string[];
}

const List: React.FC<ListProps> = ({
  items,
  canManageFavorite = false,
  headers,
}) => {

  const displayItems = () => {

    if (!items.length) {
      return (
        <tr>
          <td
            colSpan={3}
            className="text-center"
            >
              No data found.
            </td>
        </tr>
      );
    }

    return items.map((pokemon, index) => (
      <ListItem
        key={index}
        item={pokemon}
        canManageFavorite={canManageFavorite}
      />
    ));
  };

  return (
    <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {headers.map((header, i) => (
            <th key={i} scope="col" className="px-6 py-3">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {displayItems()}
      </tbody>
    </table>
  );
};

export default List;
