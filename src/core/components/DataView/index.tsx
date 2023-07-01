import { PropsWithChildren } from "react";

import { DataViewProps } from "../meta/i-data-view";
import Skeleton from "../Skeleton";

// TODO: load more or pagination feature
const DataView = ({
  error,
  isLoading,
  page,
  setPage,
  isGrid,
  setIsGrid,
  children,
}: PropsWithChildren<DataViewProps>) => {
  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  if (error) return <div>failed to load</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-end mb-4">
        <button
          className="text-indigo-500 hover:text-indigo-600 mr-2"
          onClick={toggleView}
        >
          {isGrid ? "Switch to List" : "Switch to Grid"}
        </button>
      </div>
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
    </div>
  );
};

export default DataView;
