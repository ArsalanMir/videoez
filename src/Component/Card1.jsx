import React from 'react';
import feature from '../assets/feature.png';
import { Star } from 'lucide-react';

const Card1 = () => {
  return (
    <section className="py-10 px-4 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-[#A14CF4]">Features</span>
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Explore our suite of AI tools designed for creators, marketers, and storytellers.
        </p>
      </div>

      {/* Feature Card - Styled to match others */}
      <div className="w-full max-w-7xl mx-auto border border-[#e0d4fc] rounded-2xl p-6 md:p-8 shadow-md bg-gradient-to-br from-[#f4f4fd] to-[#fefefe]">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {[
            'Product Demos',
            'Customer Testimonials',
            'Social Media Ads',
            'Online Courses',
            'Influencer Marketing',
          ].map((tab, index) => (
            <button
              key={index}
              className="bg-gradient-to-r from-[#dfc9fd] to-[#f5c9f6] text-gray-800 font-medium px-4 py-2 rounded-md text-sm hover:shadow-md"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={feature}
            alt="Business meeting"
            className="w-full md:w-1/2 h-[260px] object-cover rounded-xl"
          />

          <div className="md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
              Create captivating videos for every business scenario
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-gray-700">
              {[
                'Professionally designed templates for business presentations, promos, and ads',
                'Script-to-video feature for product demos, explainers, and corporate updates',
                'Transition effects library with preview capabilities',
                'Voiceover integration for pitch decks, HR training, and onboarding videos',
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-purple-500 mt-1" fill="currentColor" />
                  {text}
                </li>
              ))}
            </ul>

            <button className="mt-6 bg-[#6B3EFF] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#5c33dd] transition flex items-center gap-2 text-sm">
              Explore more use cases <span className="text-base">➔</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card1;
