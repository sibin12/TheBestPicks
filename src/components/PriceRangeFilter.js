import React from 'react';

export default function PriceRangeFilter({ selectedRange, onRangeChange }) {
  const priceRanges = [
    { min: 0, max: 20000, label: 'Under ₹20,000' },
    { min: 20000, max: 30000, label: '₹20,000 - ₹30,000' },
    { min: 30000, max: 50000, label: '₹30,000 - ₹50,000' },
    { min: 50000, max: Infinity, label: 'Above ₹50,000' }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Price Range</h3>
      <div className="space-y-2">
        {priceRanges.map((range, index) => (
          <button
            key={index}
            className={`w-full text-left px-4 py-2 rounded-md ${
              selectedRange.min === range.min && selectedRange.max === range.max
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
  );
}