import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

    if (cartItems.length === 0) {
        return (
            <section className="min-h-screen bg-gray-100 dark:bg-black flex items-center justify-center px-6 transition-colors duration-300">
                <div className="text-center">
                    <p className="text-6xl mb-4">🛒</p>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        Your cart is empty
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                        Looks like you haven't added anything yet.
                    </p>
                    <Link
                        to="/products"
                        className="bg-gray-800 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition duration-300"
                    >
                        Browse Products
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full bg-gray-100 dark:bg-black py-16 px-6 md:px-10 min-h-screen transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Your Cart
                        <span className="ml-3 text-lg font-normal text-gray-500 dark:text-gray-400">
                            ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
                        </span>
                    </h1>
                    <button
                        onClick={clearCart}
                        className="text-sm text-red-500 hover:text-red-600 font-medium transition duration-300"
                    >
                        Clear All
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-gray-200 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-2xl p-5 flex gap-4 items-center shadow-sm hover:shadow-md transition duration-300"
                            >
                                <img
                                    src={item.image || item.images?.[0]}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-xl shrink-0"
                                />

                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                                        {item.category}
                                    </p>
                                    <h3 className="text-base font-bold text-gray-800 dark:text-white truncate">
                                        {item.name}
                                    </h3>
                                    <p className="text-orange-500 font-bold mt-1">{item.price}</p>
                                </div>

                                {/* Quantity controls */}
                                <div className="flex items-center gap-2 shrink-0">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="w-8 h-8 rounded-lg bg-gray-300 dark:bg-slate-700 text-gray-800 dark:text-white font-bold hover:bg-orange-500 hover:text-white transition duration-300"
                                    >
                                        −
                                    </button>
                                    <span className="w-6 text-center font-semibold text-gray-800 dark:text-white">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="w-8 h-8 rounded-lg bg-gray-300 dark:bg-slate-700 text-gray-800 dark:text-white font-bold hover:bg-orange-500 hover:text-white transition duration-300"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-400 hover:text-red-600 text-xl shrink-0 transition duration-300"
                                    title="Remove"
                                >
                                    🗑
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-200 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-2xl p-6 shadow-sm h-fit sticky top-24">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
                            Order Summary
                        </h2>

                        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between">
                                    <span className="truncate max-w-[60%]">
                                        {item.name} × {item.quantity}
                                    </span>
                                    <span className="font-medium text-gray-800 dark:text-white">
                                        ₹{(parseInt(item.price.replace(/[^0-9]/g, "")) * item.quantity).toLocaleString()}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-300 dark:border-slate-700 mt-4 pt-4 flex justify-between font-bold text-gray-900 dark:text-white text-base">
                            <span>Total</span>
                            <span className="text-orange-500">₹{totalPrice.toLocaleString()}</span>
                        </div>

                        <button className="mt-6 w-full bg-gray-800 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition duration-300 hover:scale-105">
                            Proceed to Checkout
                        </button>

                        <Link
                            to="/products"
                            className="mt-3 block text-center text-sm text-blue-600 dark:text-blue-400 hover:text-orange-500 transition duration-300"
                        >
                            ← Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartPage;