import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      q: "How do I share financial documents?",
      a: "You can share via Email, WhatsApp, or our secure client portal.",
    },
    {
      q: "Will I get monthly MIS reports?",
      a: "Yes. MIS reporting is provided every month with insights.",
    },
    {
      q: "Do you help manage cash flow?",
      a: "Yes, we assist with cash flow planning & working capital.",
    },
    {
      q: "Do you support fundraising?",
      a: "Yes. We help with projections, models, investor MIS, and due diligence.",
    },
    {
      q: "Do you provide GST & Tax advisory?",
      a: "Yes. GST, TDS and Income Tax support is included.",
    },
    {
      q: "Do you handle company registration?",
      a: "We support post-incorporation compliance, not registration.",
    },
    {
      q: "Is Virtual CFO good for small businesses?",
      a: "Yes, it helps maintain financial discipline and clarity.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-xl border border-gray-200 shadow-xl rounded-xl p-5"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.q}
                </h3>
                {open === i ? (
                  <FaMinus className="text-blue-600" />
                ) : (
                  <FaPlus className="text-blue-600" />
                )}
              </button>

              {open === i && (
                <p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
