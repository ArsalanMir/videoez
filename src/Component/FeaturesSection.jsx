import React from "react";
import { Star } from "lucide-react";
import adGenerator from "../assets/feature2nd.png";
import aiAvatar from "../assets/feature3rd.png";
import videoEditor from "../assets/feature4th.png";
import Card1 from "./Card1";

const FeatureSection = () => {
  const featuresData = [
    {
      image: adGenerator,
      title: "Video Ad Maker",
      subtitle:
        "Generate professional videos directly from your eCommerce store URL",
      features: [
        "Automatically fetches product details, images and descriptions",
        "AI-powered ad scripts optimized for conversions",
        "Pre-designed templates for different product categories",
        "Custom branding with your logo and color scheme",
      ],
      cta: "Try Smart Editing",
      reverse: true,
    },
    {
      image: aiAvatar,
      title: "AI Avatar Videos",
      subtitle: "Create engaging videos with realistic digital presenters",
      features: [
        "50+ diverse AI avatars with natural expressions",
        "Generate scripts or use your own content",
        "40+ languages with natural-sounding voices",
        "Perfect lip-sync for realistic presentation",
      ],
      cta: "Start Creating",
      extraLinks: ["Explore All Avatars"],
      gradient: true,
    },
    {
      image: videoEditor,
      title: "Advanced Video Editor",
      subtitle: "Professional editing tools for perfect results every time",
      features: [
        "Drag-and-drop interface with multi-track timeline",
        "Auto-captions with perfect timing",
        "100+ transitions and effects",
        "Audio mixing with voice balancing",
      ],
      cta: "Try the Editor",
      reverse: true,
    },
  ];

  return (
    <section className="bg-white pt-0 pb-12 px-2 md:px-4">
      <Card1 />
      <div className="max-w-[90rem] mx-auto px-4 mt-10 space-y-8">
        {featuresData.map((item, index) => (
          <div
            key={index}
            className={`w-full mx-auto ${
              item.gradient
                ? "bg-gradient-to-br from-[#f1eaff] to-[#fdfaff]"
                : "bg-gradient-to-br from-[#f4f4fd] to-[#fefefe]"
            } rounded-xl p-6 shadow-sm border border-[#e0d4fc]`}
          >
            {/* Tags if needed */}
            {item.tags && (
              <div className="flex flex-wrap gap-2 justify-center mb-5">
                {item.tags.map((tag, idx) => (
                  <button
                    key={idx}
                    className="bg-gradient-to-r from-[#dfc9fd] to-[#f5c9f6] text-gray-800 font-medium px-3 py-1.5 rounded-lg text-sm hover:shadow transition whitespace-nowrap"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}

            <div
              className={`flex flex-col ${
                item.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } gap-6 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-[40%] aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text content */}
              <div className="w-full md:w-[55%]">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    {item.subtitle}
                  </p>
                )}

                <ul className="space-y-3 text-base text-gray-700">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Star
                        className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0"
                        fill="currentColor"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-5">
                  <button className="text-white px-6 py-2.5 rounded-full shadow-md bg-gradient-to-r from-[#3b2ff0] to-[#d66bfc] hover:opacity-90 transition-all flex items-center gap-2 text-base font-medium">
                    {item.cta}
                    <span className="w-5 h-5 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-sm">
                      ➔
                    </span>
                  </button>
                  {item.extraLinks?.map((link, i) => (
                    <button
                      key={i}
                      className="text-purple-700 px-6 py-2.5 rounded-full border border-purple-300 hover:bg-purple-50 transition-all flex items-center gap-2 text-base font-medium"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
