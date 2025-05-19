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
    className={`w-full max-w-7xl mx-auto ${
      gradient
        ? "bg-gradient-to-br from-[#f1eaff] to-[#fdfaff]"
        : "bg-gradient-to-br from-[#f4f4fd] to-[#fefefe]"
    } rounded-2xl px-6 md:px-8 py-10 flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } gap-6 items-center shadow-md border border-[#e0d4fc]`}
  >
    {/* Tags */}
    {tags && (
      <div className="absolute top-6 left-6 right-6 flex flex-wrap justify-center md:justify-start gap-2 z-10">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-white text-purple-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm border border-purple-100"
          >
            {tag}
          </span>
        ))}
      </div>
    )}

    {/* Image */}
    <img
      src={image}
      alt={title}
      className={`rounded-xl w-full md:w-1/2 h-[260px] object-cover ${
        tags ? "mt-20 md:mt-0" : ""
      }`}
    />

    {/* Content */}
    <div className="md:w-1/2">
      <h3 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
        {title}
      </h3>
      {subtitle && (
        <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
          {subtitle}
        </p>
      )}
      <ul className="space-y-3 text-sm md:text-base text-gray-800">
        {features.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <Star
              className="w-5 h-5 text-purple-500 mt-1"
              fill="currentColor"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4 mt-6">
        <a
          href="#"
          className="inline-flex items-center justify-between gap-3 px-6 py-2 text-sm font-medium text-white rounded-full shadow-md bg-gradient-to-r from-[#3b2ff0] to-[#d66bfc] hover:opacity-90 transition-all"
        >
          {cta}
          <span className="w-6 h-6 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-base">
            ➔
          </span>
        </a>
        {extraLinks?.map((link, i) => (
          <a
            key={i}
            href="#"
            className="inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-purple-700 border border-purple-300 rounded-full hover:bg-purple-50 transition"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const FeatureSection = () => {
  return (
    <section className="bg-white pt-0 pb-8 px-4">
      <Card1 />

      <div className="space-y-10 mt-8">
        {" "}
        {/* Controls spacing between cards */}
        <FeatureCard
          image={adGenerator}
          title="Video Ad maker"
          subtitle="Generate video from any Ecommerce store URL"
          features={[
            "Auto-fetch product details from store URLs (images, descriptions, prices)",
            "AI-generated ad scripts tailored to your product type",
            "Pre-built eCommerce ad templates optimized for conversions",
            "Smart branding with logo, colors, and product-specific transitions",
          ]}
          cta="Try Smart Editing →"
          reverse
        />
        <FeatureCard
          image={aiAvatar}
          title="Create stunning videos with AI avatars and voiceovers"
          features={[
            "Choose from diverse AI avatars with realistic facial expressions and gestures",
            "Customize scripts or auto-generate them with AI assistance",
            "Select from multilingual, human-like voiceovers with emotional tones",
            "Sync avatar lip movement seamlessly with your chosen voice track",
          ]}
          cta="Start Creating →"
          extraLinks={["Explore all Voices "]}
          gradient
        />
        <FeatureCard
          image={videoEditor}
          title="Video Editor"
          subtitle="Trim, caption, add transitions or voiceovers with a drag-and-drop interface — like Canva for videos."
          features={[
            "Intuitive timeline editor with drag-and-drop functionality",
            "Text overlays, captions, and subtitles with customizable styles",
            "Transition effects library with preview capabilities",
            "Audio mixing with background music and voiceover tracks",
          ]}
          cta="Try the Editor "
          reverse
        />
      </div>
    </section>
  );
};

export default FeatureSection;
