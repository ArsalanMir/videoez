import React from 'react';
import ananyaImg from '../assets/profile.png';
import jamesImg from '../assets/pro2nd.png';
import angelicaImg from '../assets/pro3rd.png';

const testimonials = [
  {
    text: "Perfect for busy creators like me. The suggestions are always on point and save hours of research.",
    name: "Ananya Singh",
    location: "India",
    image: ananyaImg,
  },
  {
    text: "Their smart discovery tools helped me grow my audience faster than I imagined. Huge time-saver!",
    name: "James Carter",
    location: "USA",
    image: jamesImg,
  },
  {
    text: "The platform made discovering the right content effortless — I found what I needed within minutes!",
    name: "Angelica Singh",
    location: "UK",
    image: angelicaImg,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-r from-[#f7f5fb] to-[#f5f7fc] py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">What Our Users Say</h2>
        <p className="text-gray-600 mt-2">
          Join thousands of creators who’ve transformed their video production
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-700 italic mb-6">“{item.text}”</p>
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">📍 {item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
