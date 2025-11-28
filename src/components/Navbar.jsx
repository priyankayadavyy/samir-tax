import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white shadow-md z-50 border-r-blue-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <div className="flex items-center gap-3 text-bold ">
          <img
            src={logo}
            alt="Samir Tax & Advisory Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Call Button */}
        <a
          href="tel:+916300098260"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium shadow-lg hover:scale-105 transition"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
