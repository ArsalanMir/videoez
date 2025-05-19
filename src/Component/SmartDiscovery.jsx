import React from "react";
import { Star } from "lucide-react";
import articleImg from "../assets/smartdis1.png";
import stockMediaImg from "../assets/smartdis2.png";
import facelessImg from "../assets/faceless.png";

const SmartDiscovery = () => {
  const commonButtonClass =
    "inline-flex items-center justify-between gap-3 px-6 py-2 text-sm font-medium text-white rounded-full shadow-md bg-gradient-to-r from-[#3b2ff0] to-[#d66bfc] hover:opacity-90 transition-all w-fit";

  return (
    <section className="bg-white px-4 pt-4 pb-0">
      {/* Headline */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          For anyone with a{" "}
          <span className="text-purple-500">Story to tell</span>
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
          Uncover the right audience, tools, and trends to turn your story into
          Viral Video.
        </p>
      </div>

      {/* Smart Discovery Main Card */}
<div className="max-w-7xl mx-auto bg-gradient-to-br from-[#f3e8ff] to-[#dbeafe] rounded-2xl px-6 py-8 flex flex-col md:flex-row gap-4 items-center shadow-sm mb-6">
  <div className="md:w-1/2">
    <img
      src={facelessImg}
      alt="Smart Discovery"
      className="rounded-xl w-full h-auto object-cover max-w-[400px] mx-auto"
    />
  </div>
  <div className="md:w-1/2">
    <h3 className="text-2xl font-semibold mb-1">
      Bring Your Story to Life with Smart Discovery
    </h3>
    <ul className="space-y-1 text-sm md:text-base text-gray-800">
      {[
        "Discover trending content, creators, and topics tailored to you",
        "Get instant suggestions to boost engagement and reach",
        "Save time with intelligent recommendations",
        "Great for educators, marketers, influencers, and creators",
      ].map((text, i) => (
        <li key={i} className="flex items-start gap-2">
          <Star
            className="w-4 h-4 text-purple-600 mt-1"
            fill="currentColor"
          />
          <span>{text}</span>
        </li>
      ))}
    </ul>
    <div className="mt-3">
      <a href="#" className={commonButtonClass}>
        Try it Now
        <span className="w-6 h-6 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-base">
          ➔
        </span>
      </a>
    </div>
  </div>
</div>

      {/* Two Side-by-Side Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  {/* Article to Video */}
  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
    <div>
      <h1 className="text-3xl font-bold text-purple-600 mb-1">
        Article to Video
      </h1>
      <p className="text-sm text-gray-700 mb-2">
        Transform any Article, Blog post or Webpage into a Professional
        Video with just one click. Our AI extracts the key points and
        creates a compelling narrative.
      </p>
      <img
        src={articleImg}
        alt="Article to Video"
        className="rounded-lg w-full max-w-[380px] mx-auto mb-2"
      />
    </div>
    <a href="#" className={commonButtonClass}>
      Explore
      <span className="w-6 h-6 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-base">
        ➔
      </span>
    </a>
  </div>

  {/* Stock Media */}
  <div className="bg-gradient-to-br from-[#f3e8ff] to-[#e0f2fe] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-1">
        2M+ Stock Media Available
      </h1>
      <p className="text-sm text-gray-700 mb-2">
        Access millions of high quality stock images, videos, music tracks
        and sound effects to enhance your videos without additional
        licensing fees.
      </p>
      <img
        src={stockMediaImg}
        alt="Stock Media"
        className="rounded-lg w-full max-w-[380px] mx-auto mb-2"
      />
    </div>
    <a href="#" className={commonButtonClass}>
      Explore Stock Library
      <span className="w-6 h-6 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-base">
        ➔
      </span>
    </a>
  </div>
</div>


      {/* Go Faceless Section */}
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#f3e8ff] to-[#dbeafe] rounded-2xl px-6 py-8 shadow-sm mb-10">
        {/* Heading moved to top */}
        <h1 className="text-4xl font-bold mb-1 text-center md:text-left">
          Go Faceless
        </h1>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-1">
              Generate entire videos using AI-written or your own scripts, with
              relevant scenes and stock visuals.
            </p>
            <ul className="space-y-1 text-sm md:text-base text-gray-800">
              {[
                "Automatically match script scenes with relevant visuals and stock footage",
                "Add captions and voiceovers with customizable styles",
                "Apply seamless transitions and dynamic visual effects",
                "Background music and soundtracks auto-synced with narration",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Star
                    className="w-4 h-4 text-purple-600 mt-1"
                    fill="currentColor"
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a href="#" className={commonButtonClass}>
                Create faceless video
                <span className="w-6 h-6 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-base">
                  ➔
                </span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={facelessImg}
              alt="Go Faceless Preview"
              className="rounded-xl w-full h-auto max-w-[400px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartDiscovery;
