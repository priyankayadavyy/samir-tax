import React from "react";
import {
  FaClipboardCheck,
  FaSearchDollar,
  FaChartPie,
  FaHandsHelping,
} from "react-icons/fa";

const Process = () => {
  const steps = [
    {
      icon: <FaClipboardCheck className="text-blue-600 text-4xl" />,
      title: "Step 1 — Business Understanding",
      desc: "We understand your revenue model, expenses, operational needs and financial challenges.",
    },
    {
      icon: <FaSearchDollar className="text-green-600 text-4xl" />,
      title: "Step 2 — Monthly Financial Review",
      desc: "We update books, review compliances, reconcile accounts and prepare MIS reports.",
    },
    {
      icon: <FaChartPie className="text-purple-600 text-4xl" />,
      title: "Step 3 — Reporting & Strategy",
      desc: "We provide insights, MIS and action-oriented recommendations for better decisions.",
    },
    {
      icon: <FaHandsHelping className="text-pink-600 text-4xl" />,
      title: "Step 4 — Ongoing CFO Support",
      desc: "We help with planning, financial controls, compliance guidance and long-term growth.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Our 4-Step Virtual CFO Process
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white/50 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                {step.icon}
                <h3 className="text-2xl font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
