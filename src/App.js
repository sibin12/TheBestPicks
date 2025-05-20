import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Categories from "./pages/Categories";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Deals from "./pages/Deals";

export default function App() {
  const featuredProducts = [
    {
      title: "Latest Smartphone",
      price: "699.99",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
      rating: 4,
      link: "#",
      antutuScore: 550000,
      specs: ["6.7\" AMOLED Display", "8GB RAM", "256GB Storage"]
    },
    {
      title: "Wireless Earbuds",
      price: "129.99",
      image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
      rating: 5,
      link: "#",
      antutuScore: 0,
      specs: ["Active Noise Cancellation", "30hr Battery Life", "IPX4 Water Resistant"]
    },
    {
      title: "Smart Watch",
      price: "199.99",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
      rating: 4,
      link: "#",
      antutuScore: 0,
      specs: ["Heart Rate Monitor", "GPS", "5 ATM Water Resistance"]
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredProducts.map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
                </div>
              </div>
            </>
          } />
          <Route path="/deals" element={<Deals />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}