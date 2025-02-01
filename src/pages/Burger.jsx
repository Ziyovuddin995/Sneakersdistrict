import React, { useState } from "react";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Burger Icon */}
      <button
        className="p-2 bg-gray-800 text-white rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="space-y-2">
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg w-40">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <a href="#" className="block text-gray-700 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Burger;
