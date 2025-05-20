import React from 'react';

export default function ProductCard({ title, price, image, rating, antutuScore, specs = [], link }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400">{'★'.repeat(rating)}</span>
          <span className="text-gray-400">{'★'.repeat(5-rating)}</span>
        </div>
        <div className="text-sm text-gray-600 mb-2">
          Antutu Score: {antutuScore?.toLocaleString() || 'N/A'}
        </div>
        <div className="text-sm text-gray-600 mb-4">
          <ul className="list-disc list-inside">
            {specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
        <p className="text-xl font-bold text-gray-900 mb-4">₹{parseInt(price).toLocaleString()}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700"
        >
          View on Amazon
        </a>
      </div>
    </div>
  );
}