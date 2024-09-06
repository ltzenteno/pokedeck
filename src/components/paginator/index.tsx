export interface PaginatorProps {
  currentPage: number;
  handlePrevious: (page: number) => void;
  handleNext: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  handleNext,
  handlePrevious,
}) => {

  const next = () => {
    handleNext(currentPage + 1);
  };

  const previous = () => {
    handlePrevious(currentPage - 1);
  };

  return (
    <div className="flex gap-10 justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-slate-400"
        disabled={currentPage == 1}
        onClick={previous}
      >
        <svg
          fill="white"
          height="24px"
          width="24px"
          version="1.1"
          id="XMLID_54_"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <g id="previous">
            <g>
              <polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 		" />
            </g>
          </g>
        </svg>
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-slate-400"
        onClick={next}
      >
        <svg
          fill="white"
          height="24px"
          width="24px"
          version="1.1"
          id="XMLID_287_"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <g id="next">
            <g>
              <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 		" />
            </g>
          </g>
        </svg>
      </button>
    </div>
  )
};

export default Paginator;
