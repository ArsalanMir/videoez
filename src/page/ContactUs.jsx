import React from "react";
import backgroundImage from "../assets/BackgroundImg.jpg";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import tiktok from "../assets/tictol.png";

const ContactUs = () => {
  return (
    <div
      className="relative min-h-screen px-4 py-10 sm:py-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Get in <span className="text-purple-500">Touch</span>
        </h2>
      </div>

      {/* Contact Card */}
      <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-0 max-w-7xl mx-auto bg-white shadow-lg overflow-hidden rounded-xl">
        {/* Left Info - Gradient Section */}
        <div className="p-6 sm:p-10 flex items-center justify-center">
          <div
            className="text-white flex flex-col justify-between w-full h-full rounded-xl mx-auto min-h-[400px] sm:min-h-[500px] p-6 sm:p-10"
            style={{
              background: "linear-gradient(84.88deg, #413FC2 18.63%, #C668FD 81.37%)",
            }}
          >
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                Have Questions? <br />
                Let's Talk!
              </h3>
              <p className="text-xs sm:text-sm">
                Whether you're curious about features, need a product tour, or
                just want to say hi — we're here for you.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Get expert answers to your queries",
                  "Explore tailored solutions for your goals",
                  "Book a personalized walkthrough of Syllaby",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 border border-white rounded-full flex items-center justify-center text-xs font-bold text-white bg-transparent mt-0.5">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-center mt-6 sm:mt-8">
              Connect with our team for any assistance
            </p>
          </div>
        </div>

        {/* Right Form - White Section */}
        <div className="p-6 sm:p-10 flex items-center justify-center">
          <form className="w-full space-y-4 sm:space-y-6 min-h-[400px] sm:min-h-[500px] flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm text-gray-700 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  className="border-b border-gray-300 focus:outline-none focus:border-purple-500 text-xs sm:text-sm py-1 sm:py-2"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm text-gray-700 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  className="border-b border-gray-300 focus:outline-none focus:border-purple-500 text-xs sm:text-sm py-1 sm:py-2"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="border-b border-gray-300 focus:outline-none focus:border-purple-500 text-xs sm:text-sm py-1 sm:py-2"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm text-gray-700 font-medium">
                Subject
              </label>
              <input
                type="text"
                className="border-b border-gray-300 focus:outline-none focus:border-purple-500 text-xs sm:text-sm py-1 sm:py-2"
                placeholder="Subject here"
              />
            </div>

            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm text-gray-700 font-medium">
                Message
              </label>
              <textarea
                rows={3}
                className="border-b border-gray-300 focus:outline-none focus:border-purple-500 text-xs sm:text-sm py-1 sm:py-2 resize-none"
                placeholder="Write your message.."
              />
            </div>

            {/* Button Right-Aligned */}
            <div className="pt-2 sm:pt-4 flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md hover:opacity-90 transition text-xs sm:text-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Social Section */}
      <div className="mt-12 sm:mt-20 text-center py-8 sm:py-10 px-4 rounded-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
          Create Once. Share Everywhere.
        </h3>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          {[fb, youtube, insta, tiktok, linkedin].map((icon, index) => (
            <div 
              key={index} 
              className="bg-white p-3 sm:px-6 sm:py-4 rounded-md shadow-md flex items-center"
            >
              <img 
                src={icon} 
                alt="Social media" 
                className="h-5 sm:h-6" 
              />
            </div>
          ))}
        </div>

        <button className="px-4 sm:px-6 py-1.5 sm:py-2 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-100 transition text-xs sm:text-sm font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ContactUs;