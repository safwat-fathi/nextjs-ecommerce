import { debounce } from "@/core/lib/utils";
import { ChangeEventHandler, useEffect, useState } from "react";
import SearchService from "@/services/search.service";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/i-product";

const searchService = new SearchService();

const NavSearch = () => {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<IProduct[]>([]);

  const handleCategoryChange: ChangeEventHandler<HTMLSelectElement> = e => {
    setCategory(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const res = await searchService.searchProduct(searchTerm, category);

      if (res.success) setResults(res.data);
    } catch (error) {
      console.log("🚀 ~ handleSearch ~ error:", error);
      setResults([]);
    }
  };

  const debouncedSearch = debounce(handleSearch, 500);

  useEffect(() => {
    if (searchTerm.length) debouncedSearch(searchTerm);
    else setResults([]);
  }, [searchTerm, category]);

  return (
    <div className="relative w-full max-w-md xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden md:flex items-center h-12">
      <select
        value={category}
        onChange={handleCategoryChange}
        className="form-select bg-transparent focus:outline-none focus:ring-0 uppercase font-bold text-sm border-0"
      >
        <option value="">All Categories</option>
        <option value="fragrances">Fragrances</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
      </select>

      <input
        type="text"
        className="form-input focus:outline-none focus:ring-0 bg-transparent font-semibold text-sm border-0"
        placeholder="I'm searching for ..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <div className="w-8 text-gray-500">
        <Image src="/icons/magnifier.svg" width={20} height={20} alt="search" />
      </div>

      {Boolean(results.length) && (
        <ul className="absolute z-50 top-12 bg-white border border-gray-100 w-full rounded-bl rounded-br">
          {results.map(item => (
            <li
              key={item._id}
              className="border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
            >
              <Link
                href={`/products/${item.slug}`}
                className="w-full block px-2 py-1"
              >
                {/* <b>Gar</b>da Hotel - Italië */}
                {item.name} - {item.brand}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavSearch;
