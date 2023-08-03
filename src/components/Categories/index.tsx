import { useState } from "react";
import useSWR from "swr";

import DataView from "@/core/components/DataView";
import GridView from "@/core/components/DataView/GridView";

import { fetcher } from "@/core/lib/data-fetcher";
import CategoryCard from "../CategoryCard";

const Categories = ({ initialData }: { initialData: any[] }) => {
  const [page, setPage] = useState(0);
  const [isGrid, setIsGrid] = useState(true);

  const { data, error, isLoading } = useSWR<any>(
    [`ahttps://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`, page],
    fetcher,
    {
      fallbackData: initialData,
    }
  );

  return (
    <DataView
      changView={false}
      hasPagination={false}
      error={error}
      isLoading={isLoading}
      page={page}
      setPage={setPage}
      meta={null}
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
