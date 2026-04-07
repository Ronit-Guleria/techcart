import React from "react";
import { NavLink } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";

function Nav({ darkMode, setDarkMode }) {
    const { totalItems } = useCart();

    return (
        <nav className="w-full bg-gray-100 dark:bg-[#04152d] border-b border-gray-300 dark:border-slate-700 shadow-sm transition-colors duration-300">
            <div className="max-w-10xl mx-auto px-3 md:px-10 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition duration-300">
                    <img src="/favicon.ico" alt="TechCart Logo" className="w-10 h-10 object-contain" />
                    <h1 className="font-bold text-2xl">
                        <span className="text-blue-700 dark:text-blue-400">Tech</span>
                        <span className="text-orange-500">Cart</span>
                    </h1>
                </div>

                <div className="flex items-center gap-5 md:gap-7 text-lg font-bold">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `pb-1 border-b-2 rounded-md p-1 transition duration-300 ${isActive
                                ? "border-blue-500 text-blue-600 dark:text-blue-400"
                                : "border-transparent hover:border-blue-500 hover:bg-gray-200 dark:hover:bg-slate-800"
                            }`
                        }
                    >
                        Home
                    </NavLink>


                    <a href="#products"
                    className="pb-1 border-b-2 border-transparent hover:border-blue-500 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-md p-1 transition duration-300"
                    >
                    Products
                </a>


                <a href="#contact"
                className="pb-1 border-b-2 border-transparent hover:border-blue-500 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-md p-1 transition duration-300"
                    >
                Contact Us
            </a>

            <NavLink
                to="/cart"
                className={({ isActive }) =>
                    `relative pb-1 border-b-2 rounded-md p-1 transition duration-300 ${isActive
                        ? "border-blue-500 text-blue-600 dark:text-blue-400"
                        : "border-transparent hover:border-blue-500 hover:bg-gray-200 dark:hover:bg-slate-800"
                    }`
                }
            >
                <FaShoppingCart />
                {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                        {totalItems > 9 ? "9+" : totalItems}
                    </span>
                )}
            </NavLink>

            <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition duration-300"
            >
                {darkMode ? (
                    <MdLightMode className="text-2xl hover:scale-110 transition duration-300 text-yellow-400" />
                ) : (
                    <MdDarkMode className="text-2xl hover:scale-110 transition duration-300 text-slate-800 dark:text-white" />
                )}
            </button>
        </div>
            </div >
        </nav >
    );
}

export default Nav;