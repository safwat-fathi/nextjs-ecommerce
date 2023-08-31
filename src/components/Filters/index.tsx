import { ChangeEvent } from "react";

import { useProducts } from "@/lib/contexts/products.context";
import { IProductsFilters } from "@/types/i-product";
import { ICategory } from "@/types/i-category";

const brandsData = [
  {
    id: 0,
    name: "Cooking Color",
    count: 60,
  },
  {
    id: 1,
    name: "Magniflex",
    count: 7,
  },
  {
    id: 2,
    name: "Ashley",
    count: 2,
  },
];

const categoriesData: ICategory[] = [
  {
    _id: "64baa25b328ab1c619fb1a9c",
    name: "fragrances",
    description: "All Fragrances",
    sub: [
      // {
      //   _id: "64baa25b328ab1c619fb1a9f",
      //   name: "Shirts",
      //   description: "All Shirts",
      //   sub: [],
      //   parent: "64baa25b328ab1c619fb1a9c",
      // },
    ],
    parent: null,
  },
  {
    _id: "64baa25b328ab1c619fb1aa1",
    name: "electronics",
    description: "All Electronics",
    sub: [],
    parent: null,
  },
  {
    _id: "64baa25b328ab1c619fb1aa0",
    name: "smartphones",
    description: "All Smartphones",
    sub: [],
    parent: null,
  },
];

// TODO: test useProducts with this filters against an open api
const Filters = () => {
  const { filter, setFilter, setPage } = useProducts();

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    const { categories } = filter;

    if (checked) {
      setFilter((prevState: IProductsFilters) => ({
        ...prevState,
        categories: { in: [...categories.in, name] },
      }));
    } else {
      setFilter((prevState: IProductsFilters) => ({
        ...prevState,
        categories: {
          in: categories.in.filter((item: string) => item !== name),
        },
      }));
    }

    // reset page on filter change
    setPage(1);
  };

  const handleBrandChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    const { brands } = filter;

    if (checked) {
      setFilter((prevState: IProductsFilters) => ({
        ...prevState,
        brands: { in: [...brands.in, name] },
      }));
    } else {
      setFilter((prevState: IProductsFilters) => ({
        ...prevState,
        brands: { in: brands.in.filter((item: string) => item !== name) },
      }));
    }
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const { price } = filter;

    if (value.length) {
      setFilter((prevState: IProductsFilters) => ({
        ...prevState,
        price: { ...price, [name]: +value },
      }));
    } else {
      setFilter((prevState: IProductsFilters) => ({
        ...prevState,
        price: { ...price, [name]: null },
      }));
    }
  };

  return (
    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
      <div className="divide-y divide-gray-200 space-y-5">
        <div>
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Categories
          </h3>
          {categoriesData.map(category => (
            <div key={category._id} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={category._id}
                  name={category.name}
                  // id={category.name}
                  // name={category._id}
                  onChange={handleCategoryChange}
                  // checked={filter?.categories.in.includes(category._id)}
                  checked={filter?.categories.in.includes(category.name)}
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor={category.name}
                  className="text-gray-600 cursor-pointer select-none"
                >
                  {category.name}
                </label>
                {/* <div className="ml-auto text-gray-600 text-sm">
                  ({category.count})
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Brands
          </h3>
          {brandsData.map(brand => (
            <div key={brand.id} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={brand.name}
                  name={brand.name}
                  onChange={handleBrandChange}
                  checked={filter?.categories.in.includes(brand.name)}
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor={brand.name}
                  className="text-gray-600 cursor-pointer select-none"
                >
                  {brand.name}
                </label>
                <div className="ml-auto text-gray-600 text-sm">
                  ({brand.count})
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Price
          </h3>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              name="gte"
              id="min"
              value={filter.price.gte || ""}
              onChange={handlePriceChange}
              className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="min"
            />
            <span className="mx-3 text-gray-500">-</span>
            <input
              type="text"
              name="lte"
              id="max"
              value={filter.price.lte || ""}
              onChange={handlePriceChange}
              className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="max"
            />
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            size
          </h3>
          <div className="flex items-center gap-2">
            <div className="size-selector">
              <input type="radio" name="size" id="size-xs" className="hidden" />
              <label
                htmlFor="size-xs"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XS
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-sm" className="hidden" />
              <label
                htmlFor="size-sm"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                S
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-m" className="hidden" />
              <label
                htmlFor="size-m"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                M
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-l" className="hidden" />
              <label
                htmlFor="size-l"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                L
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-xl" className="hidden" />
              <label
                htmlFor="size-xl"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XL
              </label>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Color
          </h3>
          <div className="flex items-center gap-2">
            <div className="color-selector">
              <input type="radio" name="color" id="red" className="hidden" />
              <label
                htmlFor="red"
                className="bg-red-800 border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block"
              ></label>
            </div>
            <div className="color-selector">
              <input type="radio" name="color" id="black" className="hidden" />
              <label
                htmlFor="black"
                className="bg-black border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block"
              ></label>
            </div>
            <div className="color-selector">
              <input type="radio" name="color" id="white" className="hidden" />
              <label
                htmlFor="white"
                className="bg-white border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block"
              ></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
