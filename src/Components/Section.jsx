import React from "react";

export const Section = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto my-4 flex rounded bg-[#031b36] dark:bg-[#02101f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="text-orange-400">TechCart Welcomes You</span>
              <br />
              <span className="text-blue-500">Trending Smart Gadgets</span>
            </h1>

            <p className="mt-5 text-sm md:text-base text-gray-300 max-w-md leading-6">
              Wallnut TechCart — premium matte headphones crafted for immersive sound, modern style, and everyday comfort.
            </p>

            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition duration-300 hover:scale-105">
              Browse Collection
            </button>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full"></div>

              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
                alt="Headphones"
                className="relative w-70 md:w-105 drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              />

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 md:w-72 h-16 border border-cyan-400/60 shadow-[0_0_25px_rgba(34,211,238,0.35)] rounded-md bg-slate-900/40 backdrop-blur-sm"></div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-64 md:w-80 h-4 bg-cyan-400/10 blur-xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};