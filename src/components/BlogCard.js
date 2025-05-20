import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ title, excerpt, date, image, slug }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`}
          className="text-blue-600 font-semibold hover:text-blue-800"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}