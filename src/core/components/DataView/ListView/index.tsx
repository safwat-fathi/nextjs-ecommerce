import Link from "next/link";
import React from "react";

// TODO: make component generic props for items
const ListView = ({ items }: { items: any[] }) => {
  const ListItem = ({ item }: any) => {
    return (
      <li className="border-b py-4">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <Link className="text-gray-500" href={item.url} />
      </li>
    );
  };

  return (
    <ul className="divide-y">
      {items.map(item => (
        <ListItem key={item.url} item={item} />
      ))}
    </ul>
  );
};

export default ListView;
