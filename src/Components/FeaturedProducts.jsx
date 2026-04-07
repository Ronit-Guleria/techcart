import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
function FeaturedProducts() {
    const { addToCart } = useCart();
  const products = [
    {
      id: 1,
      name: "Smart Watch",
      category: "Wearables",
      price: "₹1500",
      rating: "4.8",
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      category: "Audio",
      price: "₹2000",
      rating: "4.9",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Laptop",
      category: "Computers",
      price: "₹45000",
      rating: "4.7",
      badge: "Hot",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Security Camera",
      category: "Security",
      price: "₹3500",
      rating: "4.6",
      badge: "New",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      category: "Audio",
      price: "₹2500",
      rating: "4.5",
      badge: "Popular",
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      name: "Gaming Mouse",
      category: "Accessories",
      price: "₹4999",
      rating: "4.7",
      badge: "Top Rated",
      image: "https://images.unsplash.com/photo-1613141412501-9012977f1969?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      category: "Accessories",
      price: "₹7999",
      rating: "4.8",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 8,
      name: "Smartphone",
      category: "Mobiles",
      price: "₹110000",
      rating: "4.9",
      badge: "New",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="products" className="w-full bg-gray-100 dark:bg-black py-14 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Products
          </h2>
          <Link
            to="/products"
            className="text-sm md:text-base font-medium text-blue-600 hover:text-orange-500 transition duration-300"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gray-200 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Image area */}
              <div className="relative bg-gray-300 dark:bg-slate-800 h-56 flex items-center justify-center">
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {product.badge}
                </span>
                <img
                  src={product.image}
                  loading="lazy"
                  alt={product.name}
                  className="h-36 object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              {/* Info area */}
              <div className="p-5 bg-gray-200 dark:bg-slate-900">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {product.category}
                </p>

                <h3 className="mt-1 text-lg font-bold text-gray-800 dark:text-white">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-orange-500 font-bold text-lg">{product.price}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ⭐ {product.rating}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-gray-800 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-600 text-white py-2.5 rounded-lg transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;