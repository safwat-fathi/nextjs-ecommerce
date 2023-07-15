import { PropsWithChildren } from "react";

import ErrorFallback from "../ErrorFallback";

import Skeleton from "../Skeleton";
import { IDataView } from "../types/i-data-view";

// TODO: load more or pagination feature
const DataView = ({
  error,
  isLoading,
  page,
  setPage,
  isGrid,
  setIsGrid,
  changView = true,
  children,
}: PropsWithChildren<IDataView>) => {
  const toggleView = () => {
    if (setIsGrid) setIsGrid(!isGrid);
  };

  if (error) {
    return <ErrorFallback error={error} />;
  }

  return (
    <>
      {changView && (
        <div className="flex justify-end mb-4">
          <button
            className="text-indigo-500 hover:text-indigo-600 mr-2"
            onClick={toggleView}
          >
            {isGrid ? "Switch to List" : "Switch to Grid"}
          </button>
        </div>
      )}
      {isLoading ? <Skeleton type={isGrid ? "grid" : "list"} /> : children}
      <div className="flex gap-4">
        <button
          onClick={() => setPage(prev => (prev > 0 ? prev - page : prev))}
          disabled={page === 0}
        >
          Previous
        </button>
        <button
          onClick={() => setPage(prev => prev + 10)}
          // disabled={!(data as any).next}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default DataView;
