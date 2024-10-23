import React from "react";
import { Link } from "react-router-dom";
import {
  FaNewspaper,
  FaPlusCircle,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gray-800 py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Welcome to <span className="text-blue-500">NewsApp</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Your go-to platform for the latest news and headlines from around
            the world.
          </p>
          <Link
            to="/interests"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Headlines
          </Link>
        </div>
        {/* Decorative Curve */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none transform translate-y-1">
          <svg
            className="relative block w-full h-20"
            viewBox="0 0 1440 320"
            fill="none"
          >
            <path
              fill="currentColor"
              className="text-gray-900"
              d="M0,128L1440,320L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Section 1 */}
          <div className="flex flex-col justify-center items-center bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
            <FaNewspaper className="text-blue-500 text-6xl mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              All News in One Place
            </h2>
            <p className="text-gray-300 mb-4 text-center">
              Explore headlines from all around the world, curated for you in
              one convenient place.
            </p>
            <Link
              to="/allHeadlines"
              className="text-blue-500 hover:text-blue-400 transition font-medium"
            >
              View All Headlines
            </Link>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col justify-center items-center bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
            <FaPlusCircle className="text-blue-500 text-6xl mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              Add Your Own News
            </h2>
            <p className="text-gray-300 mb-4 text-center">
              Got some news to share? Add your news and contribute to the
              platform.
            </p>
            <Link
              to="/news"
              className="text-blue-500 hover:text-blue-400 transition font-medium"
            >
              Add News
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Join Us Today</h3>
          <div className="flex justify-center space-x-4">
            <Link
              to="/login"
              className="flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition transform hover:scale-105"
            >
              <FaSignInAlt className="mr-2" /> Login
            </Link>
            <Link
              to="/register"
              className="flex items-center px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full shadow-lg transition transform hover:scale-105"
            >
              <FaUserPlus className="mr-2" /> Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
