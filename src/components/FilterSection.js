import React from 'react';

export default function FilterSection({ 
  selectedRange, 
  onRangeChange,
  selectedAntutu,
  onAntutuChange,
  selectedRating,
  onRatingChange,
  onClearFilters
}) {
  const priceRanges = [
    { min: 0, max: 20000, label: 'Under ₹20,000' },
    { min: 20000, max: 30000, label: '₹20,000 - ₹30,000' },
    { min: 30000, max: 50000, label: '₹30,000 - ₹50,000' },
    { min: 50000, max: Infinity, label: 'Above ₹50,000' }
  ];

  const antutuScores = [
    { min: 800000, label: 'Above 800,000' },
    { min: 600000, label: 'Above 600,000' },
    { min: 400000, label: 'Above 400,000' }
  ];

  const ratings = [5, 4, 3];

  return (
    <div className="space-y-6">
      <button
        onClick={onClearFilters}
        className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 mb-4"
      >
        Clear All Filters
      </button>

      <div className="border-b pb-4">
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-2 rounded-md ${
                selectedRange?.min === range.min && selectedRange?.max === range.max
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => onRangeChange(range)}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-b pb-4">
        <h3 className="text-lg font-semibold mb-4">Antutu Score</h3>
        <div className="space-y-2">
          {antutuScores.map((score, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-2 rounded-md ${
                selectedAntutu?.min === score.min
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => onAntutuChange(score)}
            >
              {score.label}
            </button>
          ))}
        </div>
      </div>

      <div className="pb-4">
        <h3 className="text-lg font-semibold mb-4">Customer Rating</h3>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <button
              key={rating}
              className={`w-full text-left px-4 py-2 rounded-md ${
                selectedRating === rating
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => onRatingChange(rating)}
            >
              {rating}+ Stars
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}