import SearchService from "@/services/search.service";
import Image from "next/image";
import { ChangeEventHandler, useState } from "react";

const searchService = new SearchService();

const NavSearch = () => {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange: ChangeEventHandler<HTMLSelectElement> = e => {
    // console.log(e.target.value);
    setCategory(e.target.value);
  };

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = e => {
    // console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    try {
      console.log("🚀 ~ NavSearch ~ category:", category);
      console.log("🚀 ~ NavSearch ~ searchTerm:", searchTerm);

      const res = searchService.searchProduct(searchTerm, category);
      console.log("🚀 ~ handleSearch ~ res:", res);
    } catch (error) {
      console.log("🚀 ~ handleSearch ~ error:", error);
    }
  };

  return (
    <div className="w-full max-w-md xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden md:flex items-center h-12">
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
        onChange={handleSearchChange}
      />
      <button
        role="button"
        className="w-8 h-full text-gray-500"
        onClick={handleSearch}
      >
        <Image src="/icons/magnifier.svg" width={20} height={20} alt="search" />
      </button>
    </div>
  );
};

export default NavSearch;
