import React from "react";

function Whychooseus() {
  const features = [
    {
      id: 1,
      title: "Secure Payments",
      subtitle: "Protected transactions with trusted and encrypted checkout systems.",
      icon: "💳",
    },
    {
      id: 2,
      title: "Fast Delivery",
      subtitle: "Quick and reliable shipping designed for speed and convenience.",
      icon: "🚚",
    },
    {
      id: 3,
      title: "Expert Support",
      subtitle: "Friendly assistance whenever you need product or order guidance.",
      icon: "🛟",
    },
  ];

  const points = [
    {
      title: "Quality Assurance",
      desc: "Every product is carefully reviewed to meet performance and reliability standards.",
    },
    {
      title: "Rapid Shipping",
      desc: "Enjoy fast dispatch and timely delivery on selected products and locations.",
    },
    {
      title: "Safe Checkout",
      desc: "Your payments and personal details stay protected through secure encryption.",
    },
  ];

  return (
    <section className="w-full bg-gray-100 dark:bg-black py-16 md:py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-2xl md:text-4xl font-extrabold tracking-[0.2em] uppercase text-blue-900 dark:text-blue-400 font-sans">
            Why Choose TechCart
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white leading-tight">
            Built for smarter shopping and a better customer experience
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-7">
            We combine trusted products, secure transactions, and dependable service
            to make every purchase smooth, safe, and satisfying.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-gray-200 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-600 to-orange-500 text-white flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-7 text-sm md:text-base">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* What makes us different */}
        <div className="mt-14 bg-gray-200 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-2xl shadow-sm p-8 md:p-10 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            What makes us different
          </h3>

          <ul className="space-y-5">
            {points.map((point) => (
              <li key={point.title} className="flex items-start gap-4">
                <div className="w-7 h-7 mt-1 rounded-full bg-blue-200 dark:bg-blue-900 text-blue-700 dark:text-blue-300 flex items-center justify-center text-sm font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    {point.title}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-7 mt-1">
                    {point.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Whychooseus;