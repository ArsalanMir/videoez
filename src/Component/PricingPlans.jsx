import React, { useState } from "react";

const plans = [
  {
    title: "Basic",
    price: "15$",
    credits: ["1000 Credits", "2000 Credits"],
    monthlyCredits: "500 Credits / Month",
    features: [
      "Generate Ideas, Scripts & Videos",
      "100+ Avatars",
      "1 Voice Clones",
      "Video Editor",
      "Social Media",
      "Schedule 20 posts for up to 2 weeks",
      "Content Calendar",
      "30 days Storage",
    ],
    socialIcons: ["ig", "fb", "yt", "tw", "li"],
  },
  {
    title: "Standard",
    price: "45$",
    credits: ["3000 Credits", "4000 Credits"],
    monthlyCredits: "1500 Credits / Month",
    features: [
      "Generate Ideas, Scripts & Videos",
      "100+ Avatars",
      "3 Voice Clones",
      "Video Editor",
      "Social Media",
      "Schedule 60 posts for up to 4 weeks",
      "Content Calendar",
      "60 days Storage",
    ],
    socialIcons: ["ig", "fb", "yt", "tw", "li"],
    mostPopular: true,
  },
  {
    title: "Premium",
    price: "75$",
    credits: ["5000 Credits", "6000 Credits"],
    monthlyCredits: "5000 Credits / Month",
    features: [
      "Generate Ideas, Scripts & Videos",
      "100+ Avatars",
      "5 Voice Clones",
      "Video Editor",
      "Social Media",
      "Schedule 180 posts for up to 6 weeks",
      "Content Calendar",
      "90 days Storage",
    ],
    socialIcons: ["ig", "fb", "yt", "tw", "li"],
  },
  {
    title: "Enterprise",
    price: "Custom",
    credits: ["Custom Credits", "None"],
    monthlyCredits: "Custom",
    features: [
      "Generate Ideas, Scripts & Videos",
      "100+ Avatars",
      "Custom Voice Clones",
      "Video Editor",
      "Social Media",
      "Custom Scheduling",
      "Advanced Content Calendar",
      "Custom Based Storage",
    ],
    socialIcons: ["ig", "fb", "yt", "tw", "li"],
  },
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  return (
    <div className="py-10 px-6 lg:px-24 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold">
        <span className="text-[#6B4EFF] font-bold">Strikingly Powerful</span>, Yet
        Unbelievably Affordable
      </h2>
      <p className="text-gray-500 mt-2 text-sm sm:text-base">
        Choose the plan that fits your needs and enjoy your work with your right plans.
      </p>

      {/* Toggle */}
      <div className="flex justify-center mt-6 gap-2 text-sm">
        <button
          className={`py-2 px-4 rounded-full border ${
            billingCycle === "Annually" ? "bg-[#6B4EFF] text-white" : "text-[#6B4EFF] border-[#6B4EFF]"
          }`}
          onClick={() => setBillingCycle("Annually")}
        >
          25% off Annually
        </button>
        <button
          className={`py-2 px-4 rounded-full border ${
            billingCycle === "Monthly" ? "bg-[#6B4EFF] text-white" : "text-[#6B4EFF] border-[#6B4EFF]"
          }`}
          onClick={() => setBillingCycle("Monthly")}
        >
          Monthly
        </button>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative border rounded-xl p-6 shadow-md ${
              plan.mostPopular ? "border-2 border-[#6B4EFF]" : "border-gray-200"
            }`}
          >
            {plan.mostPopular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6B4EFF] text-white text-xs px-2 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
            <p className="text-2xl font-bold">{plan.price} <span className="text-base font-medium">/Month</span></p>

            {/* Credits Toggle */}
            <div className="flex mt-4 gap-2 justify-center">
              {plan.credits.map((credit, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    i === 0 ? "bg-[#6B4EFF] text-white border-transparent" : "bg-[#EAEAFF] text-[#6B4EFF]"
                  }`}
                >
                  {credit}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-600 mt-4 mb-2">Credits per month</p>
            <p className="text-sm font-medium mb-4">{plan.monthlyCredits}</p>

            {/* Features */}
            <ul className="text-sm text-left space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#6B4EFF] text-lg">✔️</span> {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-gradient-to-r from-[#6B4EFF] to-[#AE66FD] text-white py-2 rounded-full font-medium">
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button className="text-[#6B4EFF] font-medium underline">Compare all Plans</button>
      </div>
    </div>
  );
};

export default PricingPlans;
