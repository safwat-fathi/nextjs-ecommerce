import { useState } from "react";

import DataView from "@/core/components/DataView";
import GridView from "@/core/components/DataView/GridView";

import ProductCard from "../ProductCard";

import { useProducts } from "@/lib/contexts/products.context";

const Products = () => {
  const { error, isLoading, page, setPage, products, meta } = useProducts();

  const [isGrid, setIsGrid] = useState(true);

  return (
    <DataView
      error={error}
      isLoading={isLoading}
      page={page}
      setPage={setPage}
      meta={meta}
      isGrid={isGrid}
      setIsGrid={setIsGrid}
    >
      {/* <GridView> */}
      {products.map(item => (
        <ProductCard
          key={item._id}
          name={item.name}
          thumbnail={item.thumbnail}
          price={item.price}
          slug={item.slug}
          // oldPrice={item.}
          rating={item.rating}
          // totalReviews={item.}
          // images={item.images}
        />
      ))}
      {/* </GridView> */}
    </DataView>
  );
};

export default Products;
