import { useState } from "react";

import DataView from "@/core/components/DataView";
import GridView from "@/core/components/DataView/GridView";

import ProductCard from "../ProductCard";

import { useProducts } from "@/lib/contexts/products.context";

const Products = () => {
  const { error, isLoading, page, setPage, products } = useProducts();

  const [isGrid, setIsGrid] = useState(true);

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
        {products.map(item => (
          <ProductCard
            title={item.title}
            imgSrc={item.imgSrc}
            price={item.price}
            oldPrice={item.oldPrice}
            rating={item.rating}
            totalReviews={item.totalReviews}
          />
        ))}
      </GridView>
    </DataView>
  );
};

export default Products;
