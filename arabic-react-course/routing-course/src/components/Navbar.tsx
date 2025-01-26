import { NavLink } from "react-router";
type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  return (
    <header className="bg-gray-950 text-white">
      <nav className="container mx-auto">
        <ul className="flex items-center justify-between gap-2">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
