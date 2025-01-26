import { Menu } from "lucide-react";
import { useState } from "react";
import Button from "./ui/Button";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header
      className={`sticky top-0 max-w-3xl transition-[height,border-radius] duration-500 ease-in-out rounded-md ${
        isExpanded ? "h-60" : "h-[70px]"
      } drop-shadow-md bg-gray/20 mx-sm md:mx-auto bg-opacity-30 backdrop-filter backdrop-blur-lg`}
    >
      <nav className="container flex items-center justify-between mx-auto px-lg py-md">
        <h2 className="text-xl">LOGO</h2>
        <div className="flex items-center justify-center gap-sm">
          <Button variant="primary">Sign up</Button>

          <span
            onClick={toggleMenu}
            className="transition duration-500 rounded-md cursor-pointer bg-content/5 text-content p-sm hover:bg-content/10"
          >
            <Menu />
          </span>
        </div>
      </nav>

      <ul
        className={`absolute inset-x-0 left-6 transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <li className="py-1">Link 1</li>
        <li className="py-1">Link 2</li>
        <li className="py-1">Link 3</li>
        <li className="py-1">Link 4</li>
        <li className="py-1">Link 5</li>
        <li className="py-1">Link 6</li>
      </ul>
    </header>
  );
};

export default Navbar;
