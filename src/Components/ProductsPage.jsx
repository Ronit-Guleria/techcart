import React, { useState, useEffect, useCallback, memo } from "react";
import AllProducts from "./products";
import { useCart } from "./CartContext";

// ── Skeleton ─────────────────────────────────────────────────────
const SkeletonCard = memo(() => (
    <div className="bg-gray-200 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-2xl shadow-md p-5 animate-pulse">
        <div className="flex gap-2">
            <div className="w-24 h-24 bg-gray-300 dark:bg-slate-700 rounded-lg" />
            <div className="w-24 h-24 bg-gray-300 dark:bg-slate-700 rounded-lg" />
            <div className="w-24 h-24 bg-gray-300 dark:bg-slate-700 rounded-lg" />
        </div>
        <div className="mt-4 space-y-3">
            <div className="h-3 bg-gray-300 dark:bg-slate-700 rounded w-1/4" />
            <div className="h-5 bg-gray-300 dark:bg-slate-700 rounded w-2/3" />
            <div className="h-3 bg-gray-300 dark:bg-slate-700 rounded w-full" />
            <div className="h-3 bg-gray-300 dark:bg-slate-700 rounded w-5/6" />
            <div className="flex justify-between mt-2">
                <div className="h-5 bg-gray-300 dark:bg-slate-700 rounded w-1/4" />
                <div className="h-5 bg-gray-300 dark:bg-slate-700 rounded w-1/6" />
            </div>
            <div className="h-9 bg-gray-300 dark:bg-slate-700 rounded-lg w-full mt-2" />
        </div>
    </div>
));

// ── Product Card ──────────────────────────────────────────────────
// memo prevents re-render unless product or onAddToCart changes
const ProductCard = memo(({ product, onAddToCart }) => {
    const [imagesLoaded, setImagesLoaded] = useState(
        () => Array(product.images.length).fill(false)
    );

    const handleImageLoad = useCallback((index) => {
        setImagesLoaded((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });
    }, []);

    return (
        <div className="bg-gray-200 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-2xl shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="flex gap-2 overflow-x-auto">
                {product.images.map((img, i) => (
                    <div key={i} className="relative w-24 h-24 shrink-0">
                        {!imagesLoaded[i] && (
                            <div className="absolute inset-0 bg-gray-300 dark:bg-slate-700 rounded-lg animate-pulse" />
                        )}
                        <img
                            src={img}
                            loading="lazy"
                            alt={product.name}
                            onLoad={() => handleImageLoad(i)}
                            className={`w-24 h-24 object-cover rounded-lg transition-opacity duration-300 ${
                                imagesLoaded[i] ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {product.category}
                </p>
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                    {product.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                    {product.description}
                </p>
                <div className="flex justify-between mt-3">
                    <span className="text-orange-500 font-bold">{product.price}</span>
                    <span className="text-gray-500 dark:text-gray-400">⭐ {product.rating}</span>
                </div>
                <button
                    onClick={() => onAddToCart(product)}
                    className="mt-4 w-full bg-gray-800 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-600 text-white py-2 rounded-lg transition duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
});

// ── Skeletons list memoized so it never re-creates ────────────────
const PRODUCTS_PER_PAGE = 9;
const SKELETONS = Array(PRODUCTS_PER_PAGE).fill(0);

// ── Main Page ─────────────────────────────────────────────────────
function ProductsPage() {
    const { addToCart } = useCart();                        // ✅ pulled up here, not in each card
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(timer);
    }, []);

    // stable reference so ProductCard memo works correctly
    const handleAddToCart = useCallback((product) => {
        addToCart(product);
    }, [addToCart]);

    const totalPages = Math.ceil(AllProducts.length / PRODUCTS_PER_PAGE);

    const paginatedProducts = AllProducts.slice(
        (currentPage - 1) * PRODUCTS_PER_PAGE,
        currentPage * PRODUCTS_PER_PAGE
    );

    const handlePageChange = useCallback((page) => {
        setCurrentPage(page);
        setLoading(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        // single setState + rAF — no double render from setTimeout
        requestAnimationFrame(() => {
            setTimeout(() => setLoading(false), 400);
        });
    }, []);

    return (
        <section className="w-full bg-gray-100 dark:bg-black py-16 px-6 md:px-10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
                    All Products
                    <span className="ml-3 text-lg font-normal text-gray-500 dark:text-gray-400">
                        ({AllProducts.length} items)
                    </span>
                </h1>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading
                        ? SKELETONS.map((_, i) => <SkeletonCard key={i} />)
                        : paginatedProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={handleAddToCart}
                            />
                        ))
                    }
                </div>

                {/* Pagination */}
                {!loading && totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-12 flex-wrap">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition duration-300"
                        >
                            ← Prev
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-lg font-medium transition duration-300 ${
                                    currentPage === page
                                        ? "bg-orange-500 text-white shadow-md"
                                        : "bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white"
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition duration-300"
                        >
                            Next →
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProductsPage;