const ListSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse w-full">
      <div className="flex py-12 justify-between gap-4">
        <div className="h-7 bg-gray-200 rounded-md dark:bg-gray-700 w-1/3 mb-4" />
        <div className="h-7 bg-gray-200 rounded-md dark:bg-gray-700 w-1/3 mb-4" />
        <div className="h-7 bg-gray-200 rounded-md dark:bg-gray-700 w-1/3 mb-4" />
      </div>
      <div className="flex py-12 justify-between gap-4">
        <div className="h-7 bg-gray-200 rounded-md dark:bg-gray-700 w-1/3 mb-4" />
        <div className="h-7 bg-gray-200 rounded-md dark:bg-gray-700 w-1/3 mb-4" />
        <div className="h-7 bg-gray-200 rounded-md dark:bg-gray-700 w-1/3 mb-4" />
      </div>
      <div className="flex py-12 justify-between gap-4">
        <div className="h-7 bg-gray-200 rounded-md dark:bg-gray-700 w-1/3 mb-4" />
        <div className="h-7 bg-gray-200 rounded-md dark:bg-gray-700 w-1/3 mb-4" />
        <div className="h-7 bg-gray-200 rounded-md dark:bg-gray-700 w-1/3 mb-4" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default ListSkeleton;
