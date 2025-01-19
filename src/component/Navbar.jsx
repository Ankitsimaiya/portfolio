import React, { useState, useRef, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const menuRef = useRef(null); // Reference for the menu container

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full font-body bg-gray-900 text-white p-3 lg:px-24 overflow-x-hidden shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Name on the left with cursive font */}
        <div className="text-3xl font-extrabold font-cursive cursor-pointer">
          Ankit Simaiya
        </div>

        {/* Links and Hamburger */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#experience" className="hover:text-gray-400">
            Experience
          </a>
          <a href="#skill" className="hover:text-gray-400">
            Skill
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Hire
          </a>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-2xl">
          {isMenuOpen? <RiCloseLargeLine />: <BiMenuAltRight />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          ref={menuRef} // Attach the reference to the menu container
          className="md:hidden flex flex-col space-y-4 mt-4 px-4"
          onClick={toggleMenu}
        >
          <a href="#about"  className="text-white hover:text-gray-400">
            About
          </a>
          <a href="#experience" className="hover:text-gray-400">
            Experience
          </a>
          <a href="#skill" className="text-white hover:text-gray-400">
            Skill
          </a>
          <a href="#contact" className="text-white hover:text-gray-400">
            Hire
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
