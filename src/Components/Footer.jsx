import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-blue-900/40 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center md:text-left">
          © 2026 <span className="font-semibold text-blue-600 dark:text-blue-400">Tech</span>
          <span className="font-semibold text-orange-500 dark:text-orange-400">Cart</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-lg text-gray-700 dark:text-gray-300">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 hover:scale-105 inline-block">
            Privacy
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 hover:scale-105 inline-block">
            Terms
          </a>
          <a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition duration-300 hover:scale-105 inline-block">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;