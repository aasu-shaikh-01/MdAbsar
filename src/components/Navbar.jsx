import { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = () => {
  return (
    <ul className="sm:flex-row sm:gap-8 flex flex-col gap-4">
      {navLinks.map(({ id, name, href }) => (
        <li
          key={id}
          className="text-neutral-400 sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm
                     hover:bg-gray-500 hover:text-white sm:hover:bg-transparent"
        >
          <a href={href}>{name}</a>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center p-4">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hello hover:text-white transition-colors"
          >
            Adrian
          </a>
          <button
            className="text-neutral-400 sm:hidden focus:outline-none font-bold text-xl hover:text-white transition-colors"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <img src="assets/close.svg" alt="open" className="h-6 w-6" />
            ) : (
              <img src="assets/menu.svg" alt="open" className="h-6 w-6" />
            )}
          </button>
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-300 sm:hidden`}
      >
        <nav className="p-4 bg-slate-900">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
