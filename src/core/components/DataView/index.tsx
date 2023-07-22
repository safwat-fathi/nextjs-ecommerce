import { PropsWithChildren } from "react";

import Button from "../Button";
import Skeleton from "../Skeleton";
import ErrorFallback from "../ErrorFallback";

import { IDataView } from "../types/i-data-view";

// TODO: load more or pagination feature
const DataView = ({
  error,
  isLoading,
  setPage,
  meta,
  isGrid,
  setIsGrid,
  changView = true,
  hasPagination = true,
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
          <Button onClick={toggleView} variant="outlined">
            {isGrid ? "Switch to List" : "Switch to Grid"}
          </Button>
        </div>
      )}
      {isLoading ? <Skeleton type={isGrid ? "grid" : "list"} /> : children}
      {hasPagination && (
        <div className="mt-6 flex gap-4 justify-end">
          <Button
            onClick={() => setPage(prev => prev - 1)}
            disabled={!meta?.has_previous}
            variant="outlined"
          >
            Previous
          </Button>
          <Button
            onClick={() => setPage(prev => prev + 1)}
            disabled={!meta?.has_next}
            variant="outlined"
          >
            Next
          </Button>
        </div>
      )}
    </>
  );
};

export default DataView;
