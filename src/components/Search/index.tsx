import Image from "next/image";

const NavSearch = () => {
  return (
    <div className="w-full max-w-md xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden md:flex items-center h-12">
      <select className="form-select bg-transparent focus:outline-none focus:ring-0 uppercase font-bold text-sm border-0">
        <option value="">All Categories</option>
        <option value="fragrances">Fragrances</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
      </select>
      <input
        type="text"
        className="form-input focus:outline-none focus:ring-0 bg-transparent font-semibold text-sm border-0"
        placeholder="I'm searching for ..."
      />
      <button
        role="button"
        className="w-8 h-full text-gray-500"
        onClick={() => {
          console.log("search for::");
        }}
      >
        <Image src="/icons/magnifier.svg" width={20} height={20} alt="search" />
      </button>
    </div>
  );
};

export default NavSearch;
