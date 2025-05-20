import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

const faqs = [
  {
    question: "How do I get started with creating videos?",
    answer:
      "Getting started is easy! Sign up, pick a template or theme, enter your script or ideas, and let our AI handle the rest. In just a few clicks, your video will be ready to download or share on social media.",
  },
  {
    question: "Can I use the stock media for commercial projects?",
    answer: "",
  },
  {
    question: "Is there a free version available?",
    answer: "",
  },
  {
    question: "Do I need editing skills to create content?",
    answer: "",
  },
  {
    question: "What formats can I download my content in?",
    answer: "",
  },
  {
    question: "Can I schedule posts directly from the platform?",
    answer: "",
  },
  {
    question: "Is there a limit to how many videos I can create?",
    answer: "",
  },
  {
    question: "Can I create both short and long videos?",
    answer: "",
  },
  {
    question: "How does your AI generate video content?",
    answer: "",
  },
  {
    question: "Is it possible to customize templates?",
    answer: "",
  },
  {
    question: "What makes your discovery feature unique?",
    answer: "",
  },
  {
    question: "why do you join us will it be benefit for you ?",
    answer: "",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-8 pb-16 bg-white w-full">
      {/* Remove padding here so bg can go edge-to-edge */}

      <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-24">
        {/* Larger horizontal padding but inside so background fills full width */}

        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Frequently asked question</h2>
          <p className="text-gray-500 mt-2">
            Everything you need to know to start discovering and creating like a pro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-xl p-5 border border-gray-100 transition-all duration-200"
            >
              <button
                className="flex justify-between items-center w-full"
                onClick={() => toggleIndex(index)}
              >
                <span className="text-gray-900 font-medium text-sm text-left">
                  {item.question}
                </span>
                {activeIndex === index ? (
                  <MinusIcon className="w-5 h-5 text-gray-500" />
                ) : (
                  <PlusIcon className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {activeIndex === index && item.answer && (
                <p className="mt-4 text-sm text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




export default FAQ;
