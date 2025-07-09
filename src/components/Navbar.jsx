import React, { useState } from "react";
import { Menu, X, Home } from "lucide-react"; // ⬅️ Import Home icon
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="bg-white dark:bg-black shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Logo with Home Icon */}
        <a href="#hero" className="flex items-center space-x-2 text-indigo-600">
          <Home className="w-5 h-5" />
          <span className="text-xl font-bold">Home</span>
        </a>

        {/* Right: Links + ThemeToggle (desktop) */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <a href="#about" className="hover:text-indigo-600 text-gray-700 dark:text-white">About</a>
          <a href="#skills" className="hover:text-indigo-600 text-gray-700 dark:text-white">Skills</a>
          <a href="#projects" className="hover:text-indigo-600 text-gray-700 dark:text-white">Projects</a>
          <a href="#experience" className="hover:text-indigo-600 text-gray-700 dark:text-white">Experience</a>
          <a href="#contact" className="hover:text-indigo-600 text-gray-700 dark:text-white">Contact</a>
          <ThemeToggle />
        </div>

        {/* Mobile: Hamburger + Theme toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={toggleMenu}>
            {mobileOpen ? <X className="text-indigo-600" /> : <Menu className="text-indigo-600" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 py-4 space-y-4 text-gray-700 dark:text-white font-medium">
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#experience" onClick={toggleMenu}>Experience</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
