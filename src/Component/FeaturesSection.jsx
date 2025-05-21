import React from "react";
import { Star } from "lucide-react";
import adGenerator from "../assets/feature2nd.png";
import aiAvatar from "../assets/feature3rd.png";
import videoEditor from "../assets/feature4th.png";
import Card1 from "./Card1";

const FeatureCard = ({
  image,
  title,
  subtitle,
  features,
  cta,
  reverse,
  tags,
  extraLinks,
  gradient,
}) => (
  <div
    className={`w-full mx-auto ${
      gradient
        ? "bg-gradient-to-br from-[#f1eaff] to-[#fdfaff]"
        : "bg-gradient-to-br from-[#f4f4fd] to-[#fefefe]"
    } rounded-xl p-4 shadow-sm border border-[#e0d4fc]`}
  >
    {/* Tags - matching Card1 size */}
    {tags && (
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {tags.map((tag, index) => (
          <button
            key={index}
            className="bg-gradient-to-r from-[#dfc9fd] to-[#f5c9f6] text-gray-800 font-medium px-3 py-1.5 rounded-lg text-sm hover:shadow transition whitespace-nowrap"
          >
            {tag}
          </button>
        ))}
      </div>
    )}

    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-4 items-center`}
    >
      {/* Image container - matching Card1 */}
      <div className="w-full md:w-[40%] aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-2">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Content with larger text */}
      <div className="w-full md:w-[60%]">
        {/* Larger heading */}
        <h3 className="text-xl md:text-2xl font-bold mb-3 leading-snug">{title}</h3>

        {/* Larger subtitle */}
        {subtitle && (
          <p className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed">{subtitle}</p>
        )}

        {/* Larger feature list */}
        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Star className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Buttons - matching Card1 size */}
        <div className="flex flex-wrap gap-3 mt-4">
          <button className="text-white px-5 py-2 rounded-full shadow-md bg-gradient-to-r from-[#3b2ff0] to-[#d66bfc] hover:opacity-90 transition-all flex items-center gap-2 text-sm font-medium">
            {cta}
            <span className="w-5 h-5 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-sm">
              ➔
            </span>
          </button>
          {extraLinks?.map((link, i) => (
            <button
              key={i}
              className="text-purple-700 px-5 py-2 rounded-full border border-purple-300 hover:bg-purple-50 transition-all flex items-center gap-2 text-sm font-medium"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const FeatureSection = () => {
  return (
    <section className="bg-white pt-0 pb-8 px-2 md:px-4">
      {/* Container for alignment */}
      <Card1 />
      <div className="max-w-[90rem] mx-auto px-4">
        

        <div className="space-y-6 mt-6">
          <FeatureCard
            image={adGenerator}
            title="Video Ad Maker"
            subtitle="Generate professional videos directly from your eCommerce store URL"
            features={[
              "Automatically fetches product details, images and descriptions",
              "AI-powered ad scripts optimized for conversions",
              "Pre-designed templates for different product categories",
              "Custom branding with your logo and color scheme",
            ]}
            cta="Try Smart Editing"
            reverse
          />

          <FeatureCard
            image={aiAvatar}
            title="AI Avatar Videos"
            subtitle="Create engaging videos with realistic digital presenters"
            features={[
              "50+ diverse AI avatars with natural expressions",
              "Generate scripts or use your own content",
              "40+ languages with natural-sounding voices",
              "Perfect lip-sync for realistic presentation",
            ]}
            cta="Start Creating"
            extraLinks={["Explore All Avatars"]}
            gradient
          />

          <FeatureCard
            image={videoEditor}
            title="Advanced Video Editor"
            subtitle="Professional editing tools for perfect results every time"
            features={[
              "Drag-and-drop interface with multi-track timeline",
              "Auto-captions with perfect timing",
              "100+ transitions and effects",
              "Audio mixing with voice balancing",
            ]}
            cta="Try the Editor"
            reverse
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
