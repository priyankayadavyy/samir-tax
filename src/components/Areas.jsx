import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Areas = () => {
  const areas = [
    "Saheed Nagar",
    "Jaydev Vihar",
    "Patia",
    "Chandrasekharpur",
    "Nayapalli",
    "Rasulgarh",
    "Khandagiri",
    "Old Town",
    "Mancheswar",
    "Acharya Vihar",
    "Palasuni",
    "Baramunda",
    "Hanspal",
    "Laxmisagar",
    "Remote CFO Support PAN-India",
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-b from-gray-50 to-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Areas We Serve in Bhubaneswar
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <div
              key={i}
              className="bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl rounded-xl p-5 flex items-center gap-3 hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <FaMapMarkerAlt className="text-red-600 text-2xl" />
              <span className="text-gray-800 font-semibold">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Areas;
