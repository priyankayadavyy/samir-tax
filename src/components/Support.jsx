import React from "react";
import { FaBuilding } from "react-icons/fa";

const Support = () => {
  const list = [
    "Startups",
    "SMEs",
    "Retailers",
    "Traders & wholesalers",
    "Service companies",
    "E-commerce sellers",
    "Consultants & freelancers",
    "Small manufacturers",
    "Agencies",
    "Construction suppliers",
    "Hospitality businesses",
    "Healthcare & clinics",
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Who We Support in Bhubaneswar
        </h2>

        <p className="text-center text-gray-600 mt-2">
          A wide range of businesses benefit from Virtual CFO services.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {list.map((item, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-xl border border-gray-200 shadow-xl rounded-xl p-6 flex items-center gap-3 hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <FaBuilding className="text-blue-600 text-2xl" />
              <span className="text-gray-800 font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
