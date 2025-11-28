import React from "react";
import {
  FaChartLine,
  FaCoins,
  FaCashRegister,
  FaBalanceScale,
  FaFileAlt,
  FaCogs,
  FaRocket,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaChartLine className="text-blue-600 text-4xl" />,
      title: "Monthly MIS & Financial Reporting",
      points: [
        "Profit & Loss",
        "Cash Flow Report",
        "Balance Sheet",
        "Burn rate",
        "Runway analysis",
        "GST summary",
        "Expense insights",
        "KPI analysis",
      ],
    },
    {
      icon: <FaCoins className="text-yellow-600 text-4xl" />,
      title: "Financial Planning & Budgeting",
      points: [
        "Annual budgets",
        "Revenue planning",
        "Forecasting",
        "Cost allocation",
        "Scenario planning",
        "Growth planning",
      ],
    },
    {
      icon: <FaCashRegister className="text-green-600 text-4xl" />,
      title: "Cash Flow & Working Capital",
      points: [
        "Track inflow/outflow",
        "Vendor payment management",
        "Control expenses",
        "Maintain reserves",
        "Improve cash cycle",
      ],
    },
    {
      icon: <FaBalanceScale className="text-purple-600 text-4xl" />,
      title: "GST, TDS & Tax Advisory",
      points: [
        "GST applicability",
        "ITC planning",
        "TDS structure",
        "Income tax guidance",
        "Business tax-saving plans",
      ],
    },
    {
      icon: <FaFileAlt className="text-red-600 text-4xl" />,
      title: "ROC/MCA Compliance Support",
      points: [
        "ROC filings",
        "Director KYC",
        "Compliance calendar setup",
        "Audit support",
      ],
    },
    {
      icon: <FaCogs className="text-indigo-600 text-4xl" />,
      title: "Internal Financial Controls (SOPs)",
      points: [
        "Vendor management",
        "Approval workflows",
        "Reimbursement SOPs",
        "Payroll structure",
        "Financial discipline systems",
      ],
    },
    {
      icon: <FaRocket className="text-pink-600 text-4xl" />,
      title: "Startup Financial Advisory",
      points: [
        "Burn analysis",
        "Runway calculation",
        "Investor MIS",
        "Financial modeling",
        "Projections",
        "Fundraise preparation",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-b from-gray-50 to-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Our Virtual CFO & Advisory Services
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>

              <ul className="space-y-2 text-gray-700">
                {service.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600 font-bold">✔</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
