import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const WhyNeed = () => {
  const problems = [
    "Cash flow mismanagement",
    "Irregular accounting & compliance",
    "Lack of financial clarity",
    "No proper MIS or reporting",
    "Uncontrolled expenses",
    "No budgeting or planning",
    "Difficulty understanding profitability",
    "GST + IT + TDS confusion",
    "Rapid growth without financial structure",
  ];

  const solutions = [
    "Manage finances professionally",
    "Improve decision-making",
    "Reduce unnecessary expenses",
    "Maintain clean compliance",
    "Prepare for audits and funding",
    "Build long-term financial discipline",
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Why Businesses Need Virtual CFO
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-xl p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Common Problems
            </h3>
            <ul className="space-y-3 text-gray-800">
              {problems.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaTimesCircle className="text-red-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-xl p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              A Virtual CFO Helps You
            </h3>
            <ul className="space-y-3 text-gray-800">
              {solutions.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNeed;
