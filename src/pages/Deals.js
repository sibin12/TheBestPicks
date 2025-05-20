import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import FilterSection from '../components/FilterSection';
import { categoryProducts } from './Categories';

export default function Deals() {
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedAntutu, setSelectedAntutu] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [sortOrder, setSortOrder] = useState('featured');

  // Combine all products from categories
  const allProducts = [
    ...categoryProducts["Tech & Gadgets"],
    ...categoryProducts["Health & Fitness"],
    ...categoryProducts["Home Decor"]
  ];

  const clearFilters = () => {
    setSelectedRange(null);
    setSelectedAntutu(null);
    setSelectedRating(null);
  };

  let filteredProducts = [...allProducts];

  if (selectedRange) {
    filteredProducts = filteredProducts.filter(
      product => {
        const price = parseFloat(product.price);
        return price >= selectedRange.min && price <= selectedRange.max;
      }
    );
  }

  if (selectedAntutu) {
    filteredProducts = filteredProducts.filter(
      product => (product.antutuScore || 0) >= selectedAntutu.min
    );
  }

  if (selectedRating) {
    filteredProducts = filteredProducts.filter(
      product => product.rating >= selectedRating
    );
  }

  // Sort products
  switch (sortOrder) {
    case 'price-low':
      filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'antutu':
      filteredProducts.sort((a, b) => (b.antutuScore || 0) - (a.antutuScore || 0));
      break;
    default:
      // Keep original order for 'featured'
      break;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Latest Deals</h1>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="bg-white border rounded-md px-4 py-2"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="antutu">Highest Antutu Score</option>
        </select>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md h-fit">
          <FilterSection 
            selectedRange={selectedRange}
            onRangeChange={setSelectedRange}
            selectedAntutu={selectedAntutu}
            onAntutuChange={setSelectedAntutu}
            selectedRating={selectedRating}
            onRatingChange={setSelectedRating}
            onClearFilters={clearFilters}
          />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-8 text-gray-500 bg-white rounded-lg shadow-md">
              <p className="text-xl font-semibold mb-2">No products found</p>
              <p className="text-gray-400">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}