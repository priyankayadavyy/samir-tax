import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 opacity-95"></div>

      <div className="relative max-w-6xl mx-auto text-center py-24 px-6 text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg leading-tight">
          Virtual CFO & Financial Advisory Services
          <span className="block mt-3 text-yellow-200">
            For Startups & SMEs in Bhubaneswar
          </span>
        </h1>

        <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto opacity-90">
          MIS, Cash Flow, Budgeting, Compliance & Startup Advisory at a fraction
          of the cost of hiring a full-time CFO.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+916300098260"
            className="flex items-center gap-2 bg-white text-blue-700 px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            <FaPhoneAlt /> Call Now
          </a>

          <a
            href="mailto:support@samirtaxadvisory.com"
            className="flex items-center gap-2 bg-yellow-200 text-gray-900 px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            <FaEnvelope /> Email Us
          </a>

          <button className="px-7 py-3 bg-green-300 text-white rounded-xl font-semibold shadow-lg hover:bg-green-600 hover:scale-105 transition">
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
