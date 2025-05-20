import React from 'react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Amazing Deals
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Find the best products at unbeatable prices
        </p>
        <a
           href="https://amzn.to/4kaqUSS"
           target="_blank"
            rel="noopener noreferrer">
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
          Browse Deals
        </button>
        </a>
      </div>
    </div>
  );
}