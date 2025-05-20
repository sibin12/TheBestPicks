import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  const sidebarImages = {
    "best-fitness-equipment": [
      "https://images.pexels.com/photos/4162472/pexels-photo-4162472.jpeg",
      "https://images.pexels.com/photos/4162461/pexels-photo-4162461.jpeg",
      "https://images.pexels.com/photos/4162421/pexels-photo-4162421.jpeg"
    ],
    "top-tech-gadgets-2024": [
      "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg",
      "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg",
      "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg"
    ],
    "home-decor-trends": [
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      "https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg",
      "https://images.pexels.com/photos/1457843/pexels-photo-1457843.jpeg"
    ]
  };

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/blog" className="text-blue-600 hover:text-blue-800 mb-8 block">
        ← Back to Blog
      </Link>
      <div className="flex flex-col lg:flex-row gap-8">
        <article className="lg:w-2/3">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          <div className="prose max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="text-gray-500 mb-8">{post.date}</div>
            <div className="whitespace-pre-line text-gray-700">
              {post.content}
            </div>
          </div>
        </article>

        <aside className="lg:w-1/3 space-y-8">
          {/* Product Images Gallery */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Product Gallery</h3>
            <div className="grid grid-cols-1 gap-4">
              {sidebarImages[post.slug]?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md hover:opacity-90 transition-opacity cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Related Posts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
            <div className="space-y-4">
              {relatedPosts.map((relatedPost, index) => (
                <Link 
                  key={index}
                  to={`/blog/${relatedPost.slug}`}
                  className="block group"
                >
                  <div className="flex gap-4 items-start">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-500">{relatedPost.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/deals" className="block text-blue-600 hover:text-blue-800">
                → Browse Latest Deals
              </Link>
              <Link to="/categories" className="block text-blue-600 hover:text-blue-800">
                → Explore Categories
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}