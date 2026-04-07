import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import  Nav  from "./Components/nav";
import { Section } from "./Components/Section";
import FeaturedProducts from "./Components/FeaturedProducts";
import Whychooseus from "./Components/Whychooseus";
import Footer from "./Components/Footer";
import ContactUs from "./Components/Contactus";
import Notfound from "./Components/Notfound";
import ProductsPage from "./Components/ProductsPage";
import CartPage from "./Components/Cart";

function Home() {
  return (
    <>
      <Section />
      <FeaturedProducts />
      <Whychooseus />
      <ContactUs />
    </>
  );
}

function Products() {
  return <ProductsPage />
}
// function ProductsPage() {
//   return <ProductsPage />;
// }

function ContactPage() {
  return <ContactUs />;
}


function App() {
  // Initialize state directly from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Only one useEffect is needed to handle changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("Dark mode enabled");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("Light mode enabled");
    }
  }, [darkMode]);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
