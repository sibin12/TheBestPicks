import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              TheBestPicks
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/deals" className="text-gray-600 hover:text-gray-900">Deals</Link>
            <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}