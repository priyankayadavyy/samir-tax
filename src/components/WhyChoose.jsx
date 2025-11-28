import React from "react";
import { FaStar } from "react-icons/fa";

const WhyChoose = () => {
  const reasons = [
    "Designed for Startups & SMEs",
    "Dedicated CFO Advisor",
    "Easy Document Sharing",
    "Monthly MIS + Anytime Insights",
    "Affordable Alternative to Hiring a CFO",
    "Scalable With Your Growth",
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-b from-gray-100 to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Why Choose Samir Tax & Advisory
        </h2>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((text, i) => (
            <div
              key={i}
              className="bg-white/50 backdrop-blur-xl border border-white/30 shadow-xl rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaStar className="text-yellow-500 text-3xl" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {i + 1}. {text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
