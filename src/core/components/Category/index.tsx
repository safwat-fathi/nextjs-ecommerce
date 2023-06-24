import { useState } from "react";

const Categories = ({ categories }: { categories: any[] }) => {
  const [isGrid, setIsGrid] = useState(true);

  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  const CategoryCard = ({ category }: any) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">{category.name}</h2>
        <p className="text-gray-500">{category.description}</p>
      </div>
    );
  };

  const CategoryListItem = ({ category }: any) => {
    return (
      <li className="border-b py-4">
        <h2 className="text-lg font-semibold">{category.name}</h2>
        <p className="text-gray-500">{category.description}</p>
      </li>
    );
  };

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <ul className="divide-y">
          {categories.map(category => (
            <CategoryListItem key={category.id} category={category} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
