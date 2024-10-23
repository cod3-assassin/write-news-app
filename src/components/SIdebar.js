import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-lg fixed top-0 w-full z-30">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
          NewsApp
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-gray-300 focus:outline-none z-30"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-blue-500 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/allHeadlines"
            className="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-blue-500 transition duration-300"
          >
            All Headlines
          </Link>
          <Link
            to="/interests"
            className="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-blue-500 transition duration-300"
          >
            Interests
          </Link>
          <Link
            to="/news"
            className="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-blue-500 transition duration-300"
          >
            Add News
          </Link>
        </div>

        {/* Login/Register Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Register
          </Link>
        </div>

        {/* Sliding Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-20 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col h-full p-6 space-y-6">
            {/* Heading Section */}
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-white">NewsApp</h1>
            </div>

            {/* Navigation Links Section */}
            <div className="flex flex-col space-y-4 border-t border-gray-700 pt-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-gray-700 p-2 rounded-md transition duration-300 w-full"
              >
                Home
              </Link>

              <Link
                to="/allHeadlines"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-gray-700 p-2 rounded-md transition duration-300 w-full"
              >
                All Headlines
              </Link>
              <Link
                to="/interests"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-gray-700 p-2 rounded-md transition duration-300 w-full"
              >
                Interests
              </Link>
              <Link
                to="/news"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-gray-700 p-2 rounded-md transition duration-300 w-full"
              >
                Add News
              </Link>
            </div>

            {/* Settings and Logout Section */}
            <div className="flex flex-col space-y-4 mt-6 border-t border-gray-700 pt-4">
              <Link
                to="/settings"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-gray-700 p-2 rounded-md transition duration-300 w-full"
              >
                Settings
              </Link>
              <Link
                to="/logout"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-gray-700 p-2 rounded-md transition duration-300 w-full"
              >
                Logout
              </Link>
            </div>

            {/* Login/Register Section */}
            <div className="flex flex-col space-y-4 mt-6 border-t border-gray-700 pt-32">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 w-full text-center"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 w-full text-center"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Sidebar;
