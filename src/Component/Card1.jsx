import React from "react";
import feature from "../assets/feature.png";
import { Star } from "lucide-react";

const Card1 = () => {
  return (
    <section className="pt-0 px-2 bg-white">
      <div className="text-center mb-5">
        {/* Larger heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our <span className="text-[#A14CF4]">Features</span>
        </h2>
        {/* Larger tagline */}
        <p className="mt-2 text-gray-600 text-lg">
          Explore our powerful suite of AI tools designed for modern creators, marketers, and storytellers.
        </p>
      </div>
      
      <div className="w-full border border-[#e0d4fc] rounded-xl p-4 shadow-sm bg-gradient-to-br from-[#f4f4fd] to-[#fefefe]">
        {/* Larger tags */}
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
              className="bg-gradient-to-r from-[#dfc9fd] to-[#f5c9f6] text-gray-800 font-semibold px-4 py-2 rounded-lg text-base hover:shadow-md transition whitespace-nowrap"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Smaller image container */}
          <div className="w-full md:w-[38%] aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-3">
            <img
              src={feature}
              alt="Business meeting"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full md:w-[62%]">
            {/* Larger heading */}
            <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              Create stunning, professional videos
            </h3>
            {/* Larger text with more spacing */}
            <ul className="space-y-3 text-base text-gray-700">
              {[
                "Professionally designed templates for all business presentations and marketing needs",
                "Advanced script-to-video feature for rapid content creation",
                "Comprehensive transition effects library with real-time preview",
                "Seamless voiceover integration for professional narration",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Star
                    className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Larger button */}
            <button className="mt-4 text-white px-6 py-2.5 rounded-full shadow-md bg-gradient-to-r from-[#3b2ff0] to-[#d66bfc] hover:opacity-90 transition-all flex items-center gap-2 text-base font-medium">
              Explore all features
              <span className="w-5 h-5 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-sm">
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