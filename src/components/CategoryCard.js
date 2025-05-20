import React from 'react';

export default function CategoryCard({ title, icon, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-2">{icon}</span>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Explore {title}
        </button>
      </div>
    </div>
  );
}