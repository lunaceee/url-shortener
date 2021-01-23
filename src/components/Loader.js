const Loader = () => {
  return (
    <div className="xl:justify-self-start max-w-md w-full">
      <div className="border border-gray-300 shadow rounded-md p-4 mx-auto grid gap-2">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="space-y-2">
              <div className="h-4 bg-gray-400 rounded"></div>
              <div className="h-4 bg-gray-400 rounded w-5/6"></div>
            </div>
          </div>
          <div className="rounded bg-gray-400 h-8 w-12"></div>
        </div>
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="space-y-2">
              <div className="h-4 bg-gray-400 rounded"></div>
              <div className="h-4 bg-gray-400 rounded w-5/6"></div>
            </div>
          </div>
          <div className="rounded bg-gray-400 h-8 w-12"></div>
        </div>
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="space-y-2">
              <div className="h-4 bg-gray-400 rounded"></div>
              <div className="h-4 bg-gray-400 rounded w-5/6"></div>
            </div>
          </div>
          <div className="rounded bg-gray-400 h-8 w-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
