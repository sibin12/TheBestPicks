import React from 'react';
import BlogCard from '../components/BlogCard';

export const blogPosts = [
  {
    title: "Best Fitness Equipment for Home Workouts",
    excerpt: "Transform your home into a personal gym with these essential pieces of equipment that offer the best value for your fitness journey.",
    date: "December 20, 2023",
    image: "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg",
    slug: "best-fitness-equipment",
    content: `
      Setting up a home gym doesn't have to break the bank. Here are our top picks for essential home fitness equipment:

      1. Adjustable Dumbbells - PowerBlock Sport 24
      - Perfect for small spaces
      - Adjustable from 3 to 24 pounds
      - Replaces 8 pairs of dumbbells
      - Price: ₹15,999
      - Rating: 4.8/5 based on 1,200+ reviews

      2. Yoga Mat - Liforme Original
      - Eco-friendly materials
      - Perfect alignment markers
      - Extra grip and cushioning
      - Price: ₹9,999
      - Rating: 4.9/5 based on 2,000+ reviews

      3. Resistance Bands Set - FITFORT Premium
      - 5 different resistance levels
      - Durable latex construction
      - Includes carry bag and exercise guide
      - Price: ₹1,499
      - Rating: 4.7/5 based on 3,500+ reviews
    `
  },
  {
    title: "Top Tech Gadgets of 2024",
    excerpt: "Discover the most innovative and must-have tech gadgets for the new year that will transform your daily life.",
    date: "December 18, 2023",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
    slug: "top-tech-gadgets-2024",
    content: `
      The most exciting tech innovations of 2024 are here! Check out our top picks:

      1. Samsung Galaxy S24 Ultra
      - Revolutionary AI features
      - 200MP camera with advanced night mode
      - Snapdragon 8 Gen 3
      - Price: ₹124,999
      - Rating: 4.9/5 based on 500+ reviews
      
      2. Apple MacBook Pro M3
      - Incredible performance
      - Up to 22 hours battery life
      - Beautiful Liquid Retina XDR display
      - Price: ₹169,999
      - Rating: 4.8/5 based on 1,000+ reviews

      3. Sony WH-1000XM5
      - Best-in-class noise cancellation
      - 30-hour battery life
      - Multi-device connectivity
      - Price: ₹34,999
      - Rating: 4.8/5 based on 2,500+ reviews
    `
  },
  {
    title: "Modern Home Decor Trends",
    excerpt: "Stay ahead of the curve with these trending home decoration ideas that blend style with functionality.",
    date: "December 15, 2023",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    slug: "home-decor-trends",
    content: `
      Transform your living space with these trending home decor items:

      1. Smart LED Light Strip - Philips Hue Lightstrip Plus
      - 16 million colors
      - Voice control compatible
      - Easy installation
      - Price: ₹7,999
      - Rating: 4.7/5 based on 3,000+ reviews

      2. Minimalist Wall Clock - UMBRA Silent
      - Modern design
      - Silent movement
      - Available in multiple finishes
      - Price: ₹4,999
      - Rating: 4.6/5 based on 1,500+ reviews

      3. Air Purifying Plants Set
      - Includes Snake Plant, Peace Lily, and Spider Plant
      - Low maintenance
      - Natural air purification
      - Price: ₹2,499
      - Rating: 4.8/5 based on 800+ reviews
    `
  }
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}