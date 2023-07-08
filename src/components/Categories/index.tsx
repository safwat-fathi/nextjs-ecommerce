import { useState } from "react";
import useSWR from "swr";

import DataView from "@/core/components/DataView";
import GridView from "@/core/components/DataView/GridView";
import ListView from "@/core/components/DataView/ListView";

import { fetcher } from "@/core/lib/data-fetcher";
import CategoryCard from "../CategoryCard";

const Categories = ({ initialData }: { initialData: any[] }) => {
  const [page, setPage] = useState(0);
  const [isGrid, setIsGrid] = useState(true);

  const { data, error, isLoading } = useSWR<any>(
    [`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`, page],
    fetcher,
    {
      fallbackData: initialData,
    }
  );

  return (
    <DataView
      error={error}
      isLoading={isLoading}
      page={page}
      setPage={setPage}
      isGrid={isGrid}
      setIsGrid={setIsGrid}
    >
      <GridView>
        {data?.results?.map((item: any) => (
          <CategoryCard
            key={item.name}
            imgSrc="/images/logo.svg"
            label="woooooooooow"
          />
        ))}
      </GridView>
    </DataView>
  );
};

export default Categories;
