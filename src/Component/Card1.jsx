import React from "react";
import feature from "../assets/feature.png";
import { Star } from "lucide-react";

const Card1 = () => {
  return (
    <section className="pt-0 px-4 bg-white">
      {" "}
      {/* Removed top padding */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-[#A14CF4]">Features</span>
        </h2>
        <p className="text-gray-600 mt-1 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed">
          Explore our suite of AI tools designed for creators, marketers, and
          storytellers.
        </p>
      </div>
      <div className="w-full max-w-7xl mx-auto border border-[#e0d4fc] rounded-2xl p-6 md:p-8 shadow-md bg-gradient-to-br from-[#f4f4fd] to-[#fefefe]">
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {[
            "Product Demos",
            "Customer Testimonials",
            "Social Media Ads",
            "Online Courses",
            "Influencer Marketing",
          ].map((tab, index) => (
            <button
              key={index}
              className="bg-gradient-to-r from-[#dfc9fd] to-[#f5c9f6] text-gray-800 font-semibold px-4 py-2 rounded-lg text-sm md:text-base hover:shadow-lg transition"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src={feature}
            alt="Business meeting"
            className="w-full md:w-1/2 h-[240px] object-cover rounded-xl"
          />

          <div className="md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-3 leading-snug">
              Create captivating videos for every business scenario
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-700">
              {[
                "Professionally designed templates for business presentations, promos, and ads",
                "Script-to-video feature for product demos, explainers, and corporate updates",
                "Transition effects library with preview capabilities",
                "Voiceover integration for pitch decks, HR training, and onboarding videos",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Star
                    className="w-4 h-4 text-purple-500 mt-1"
                    fill="currentColor"
                  />
                  {text}
                </li>
              ))}
            </ul>

            <button className="mt-4 text-white px-6 py-2 rounded-full shadow-md bg-gradient-to-r from-[#3b2ff0] to-[#d66bfc] hover:opacity-90 transition-all flex items-center gap-3 text-sm font-medium">
  Explore more use cases
  <span className="w-6 h-6 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-base">
    ➔
  </span>
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card1;
