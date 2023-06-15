import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import MenuBar from "./MenuBar";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* First Bar */}
        <TopBar />

        {/* Second Bar */}
        <SearchBar />

        {/* Third Bar */}
        <MenuBar />
      </div>
    </nav>
  );
};

export default Navbar;
