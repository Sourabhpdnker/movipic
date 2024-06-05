import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 rounded-lg m-2">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold">
          MyApp
        </a>
        <div className="space-x-4">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="/services" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
