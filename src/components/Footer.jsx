import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Samir Tax & Advisory
          </h2>
          <p className="mt-4 text-gray-400">
            Virtual CFO & Financial Advisory Services for Startups & SMEs.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91 6300098260
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@samirtaxadvisory.com
            </li>
            <li className="flex items-center gap-2">
              <FaGlobe /> Bhubaneswar, Odisha
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+916300098260"
              className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 hover:scale-105 transition text-center"
            >
              Call Now
            </a>

            <a
              href="mailto:support@samirtaxadvisory.com"
              className="bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700 hover:scale-105 transition text-center"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} Samir Tax & Advisory. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
