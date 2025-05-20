import React from 'react';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';

export const categoryProducts = {
  "Health & Fitness": [
    {
      title: "Powermax Fitness Treadmill",
      price: "29999",
      image: "https://images.pexels.com/photos/4162435/pexels-photo-4162435.jpeg",
      rating: 4,
      specs: ["2.0HP Motor", "12 Programs", "LED Display", "Max Speed 14km/h"],
      link: "#"
    },
    {
      title: "AmazonBasics Yoga Mat",
      price: "999",
      image: "https://images.pexels.com/photos/4325479/pexels-photo-4325479.jpeg",
      rating: 4,
      specs: ["6mm Thickness", "Non-Slip Surface", "Lightweight", "Carrying Strap"],
      link: "#"
    },
    {
      title: "REACH Air Bike",
      price: "8999",
      image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg",
      rating: 4,
      specs: ["Dual Action Arms", "Digital Display", "8 Resistance Levels", "Max User Weight 110kg"],
      link: "#"
    },
    {
      title: "Fitkit Dumbbell Set",
      price: "2499",
      image: "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg",
      rating: 5,
      specs: ["2kg to 10kg", "Rubber Coated", "Hexagonal Design", "Chrome Handle"],
      link: "#"
    },
    {
      title: "Whey Protein Powder",
      price: "3999",
      image: "https://images.pexels.com/photos/4397833/pexels-photo-4397833.jpeg",
      rating: 4,
      specs: ["24g Protein", "5.5g BCAAs", "Low Carb", "30 Servings"],
      link: "#"
    }
  ],
  "Tech & Gadgets": [
    {
      title: "iQOO 12 5G",
      price: "52999",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
      rating: 5,
      antutuScore: 1700000,
      specs: ["Snapdragon 8 Gen 3", "12GB RAM", "50MP V2", "144Hz Display"],
      link: "#"
    },
    {
      title: "Samsung Galaxy S24 Ultra",
      price: "129999",
      image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg",
      rating: 5,
      antutuScore: 1600000,
      specs: ["Snapdragon 8 Gen 3", "12GB RAM", "200MP Camera", "S Pen"],
      link: "#"
    },
    {
      title: "iQOO Neo 10R",
      price: "26999",
      image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
      rating: 4.3,
      antutuScore: 1200000,
      specs: ["Qualcomm SM8635 Snapdragon 8s Gen 3 (4 nm)", "8GB RAM", "50MP Main Camera","32MP Front Camera", "80W Charging"],
      link: "https://amzn.to/43nFKxR"
    },
    {
      title: "Samsung Galaxy Z Fold 5",
      price: "154999",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
      rating: 4,
      antutuScore: 1200000,
      specs: ["Snapdragon 8 Gen 2", "12GB RAM", "Foldable Display", "IPX8"],
      link: "#"
    },
    {
      title: "Nothing Phone 2",
      price: "44999",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
      rating: 4,
      antutuScore: 1100000,
      specs: ["Snapdragon 8+ Gen 1", "12GB RAM", "Glyph Interface", "50MP Camera"],
      link: "#"
    }
  ],
  "Home Decor": [
    {
      title: "Smart LED Strip Lights",
      price: "2999",
      image: "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg",
      rating: 4,
      specs: ["16M Colors", "Voice Control", "Music Sync", "App Control"],
      link: "#"
    },
    {
      title: "Modern Wall Clock",
      price: "1499",
      image: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg",
      rating: 5,
      specs: ["Silent Movement", "Metal Frame", "3D Numbers", "Battery Operated"],
      link: "#"
    },
    {
      title: "Artificial Plants Set",
      price: "999",
      image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg",
      rating: 4,
      specs: ["Realistic Look", "Low Maintenance", "UV Resistant", "Set of 3"],
      link: "#"
    },
    {
      title: "Geometric Wall Shelves",
      price: "1999",
      image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg",
      rating: 4,
      specs: ["Hexagonal Design", "Strong Build", "Easy Install", "Set of 6"],
      link: "#"
    },
    {
      title: "Abstract Canvas Art",
      price: "3499",
      image: "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg",
      rating: 5,
      specs: ["Hand Painted", "Framed", "Large Size", "Modern Design"],
      link: "#"
    }
  ]
};

export default function Categories() {
  const categories = [
    {
      title: "Health & Fitness",
      icon: "🧘‍♂️",
      description: "Discover top-rated fitness equipment, supplements, and wellness products.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
    },
    {
      title: "Tech & Gadgets",
      icon: "📱",
      description: "Latest smartphones, laptops, and innovative tech accessories.",
      image: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg"
    },
    {
      title: "Home Decor",
      icon: "🏠",
      description: "Unique and stylish items to transform your living space.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Browse Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {categories.map((category, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedCategory(category.title)}
            className="cursor-pointer transform transition-transform hover:scale-105"
          >
            <CategoryCard {...category} />
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory} Products
            </h2>
            <button 
              onClick={() => setSelectedCategory(null)}
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to Categories
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts[selectedCategory].map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}