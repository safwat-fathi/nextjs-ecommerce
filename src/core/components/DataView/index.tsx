import { useState } from "react";
import useSWR from "swr";

import { DataViewProps } from "../meta/i-data-view";
import GridView from "./GridView";
import ListView from "./ListView";

// TODO: data fetching (pass the service as fetcher and handle it from inside the component with SWR)
// TODO: loading state (skeleton or spinner)
// TODO: load more or pagination feature
// TODO: grid or list
// TODO: filters to apply on data fetcher
const DataView = ({ url, initialData }: DataViewProps) => {
  const [isGrid, setIsGrid] = useState(true);
  const [page, setPage] = useState(0);

  const { data, error, isLoading } = useSWR(url, null, {
    fallbackData: initialData,
  });
  console.log("🚀 ~ data:", data);
  console.log("🚀 ~ error:", error);
  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  // if (error) return <div>failed to load</div>;

  if (isLoading) return <div>loading...</div>;

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

      {isGrid ? (
        <GridView>
          {initialData.map(item => (
            <>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <Link className="text-gray-500" href={item.url} />
            </>
          ))}
        </GridView>
      ) : (
        <ListView items={initialData} />
      )}

      <div className="flex gap-4">
        <button onClick={() => setPage(page - 10)} /* disabled={page <= 10} */>
          Previous
        </button>
        <button
          onClick={() => setPage(page + 10)} /* disabled={page < count} */
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataView;
