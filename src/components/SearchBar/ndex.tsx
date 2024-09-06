export interface SearchBarProps {
  text: string;
  setText: (text: string) => void;
  submit: () => void;
  clear: () => void;
  disabled: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  disabled,
  text,
  submit,
  setText,
  clear,
}) => {

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    submit();
  };

  const handleRemove = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    clear();
  };

  return (
    <form className="flex flex-col md:flex-row items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Pokemon..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 disabled:border-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={disabled}
        onClick={handleSubmit}
      >
        Search
      </button>
      <button
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 disabled:border-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleRemove}
      >
        Clear
      </button>
    </form>
  );
}

export default SearchBar;
