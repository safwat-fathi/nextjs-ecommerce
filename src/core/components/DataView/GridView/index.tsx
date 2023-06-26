import Link from "next/link";
import React from "react";

// TODO: make component generic props for items
const GridView = ({ items }: { items: any[] }) => {
  const CardItem = ({ item }: any) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <Link className="text-gray-500" href={item.url} />
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map(item => (
        <CardItem key={item.url} item={item} />
      ))}
    </div>
  );
};

export default GridView;
