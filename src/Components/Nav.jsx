import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useCart } from "./CartContext";

function Nav({ darkMode, setDarkMode }) {
    const { totalItems } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `pb-1 border-b-2 rounded-md p-1 transition duration-300 ${
            isActive
                ? "border-blue-500 text-blue-600 dark:text-blue-400"
                : "border-transparent hover:border-blue-500 hover:bg-gray-200 dark:hover:bg-slate-800"
        }`;

    const anchorClass =
        "pb-1 border-b-2 border-transparent hover:border-blue-500 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-md p-1 transition duration-300";

    return (
        <nav className="w-full bg-gray-100 dark:bg-[#04152d] border-b border-gray-300 dark:border-slate-700 shadow-sm transition-colors duration-300">
            <div className="max-w-10xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition duration-300">
                    <img src="/favicon.ico" alt="TechCart Logo" className="w-10 h-10 object-contain" />
                    <h1 className="font-bold text-2xl">
                        <span className="text-blue-700 dark:text-blue-400">Tech</span>
                        <span className="text-orange-500">Cart</span>
                    </h1>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-7 text-lg font-bold">
                    <NavLink to="/" className={linkClass}>Home</NavLink>
                    <a href="#products" className={anchorClass}>Products</a>
                    <a href="#contact" className={anchorClass}>Contact Us</a>

                    <NavLink to="/cart" className={({ isActive }) =>
                        `relative pb-1 border-b-2 rounded-md p-1 transition duration-300 ${
                            isActive
                                ? "border-blue-500 text-blue-600 dark:text-blue-400"
                                : "border-transparent hover:border-blue-500 hover:bg-gray-200 dark:hover:bg-slate-800"
                        }`
                    }>
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
                        {darkMode
                            ? <MdLightMode className="text-2xl text-yellow-400 hover:scale-110 transition duration-300" />
                            : <MdDarkMode className="text-2xl text-slate-800 dark:text-white hover:scale-110 transition duration-300" />
                        }
                    </button>
                </div>

                {/* Mobile Right: Cart + Dark Mode + Hamburger */}
                <div className="flex md:hidden items-center gap-3">

                    <NavLink to="/cart" className={({ isActive }) =>
                        `relative p-1 rounded-md transition duration-300 ${
                            isActive ? "text-blue-600 dark:text-blue-400" : ""
                        }`
                    }>
                        <FaShoppingCart className="text-xl" />
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
                        {darkMode
                            ? <MdLightMode className="text-2xl text-yellow-400" />
                            : <MdDarkMode className="text-2xl text-slate-800 dark:text-white" />
                        }
                    </button>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800 transition duration-300"
                    >
                        {menuOpen
                            ? <HiX className="text-2xl" />
                            : <HiMenu className="text-2xl" />
                        }
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col gap-2 px-6 pb-4 pt-2 text-base font-bold border-t border-gray-300 dark:border-slate-700">
                    <NavLink
                        to="/"
                        className={linkClass}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </NavLink>
                    <a href="#products" className={anchorClass} onClick={() => setMenuOpen(false)}>
                        Products
                    </a>
                    <a href="#contact" className={anchorClass} onClick={() => setMenuOpen(false)}>
                        Contact Us
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Nav;