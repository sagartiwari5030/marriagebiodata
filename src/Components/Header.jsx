// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white text-white p-4 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left Section - Logo */}
        <Link to="/" className="text-2xl text-pink-600 font-bold">MarriageBiodata</Link>

        {/* Right Section - Button */}
        <div className="space-x-4">
          <Link to="/create-profile">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition duration-300">
              Create Biodata Now!
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
