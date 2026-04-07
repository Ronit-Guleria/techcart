import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-slate-100 dark:from-black dark:to-slate-950 text-black dark:text-white px-6">
      
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-extrabold text-orange-500">404</h1>

        <h2 className="mt-4 text-2xl font-bold">
          Oops! Page not found
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-300">
          This page doesn’t exist. Let’s get you back.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          
          <Link
            to="/"
            className="bg-[#04152d] text-white px-6 py-3 rounded-xl hover:bg-orange-500 transition"
          >
            Go Home
          </Link>

          <Link
            to="/products"
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            Browse Products
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Notfound;