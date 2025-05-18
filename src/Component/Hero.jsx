import React from "react";
import centerImg from "../assets/centerImg.png";
import backgroundImage from "../assets/BackgroundImg.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center  px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "2",
        paddingTop: "2", 
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold leading-tight text-gray-900 pt-0"> {/* pt-0 removes padding top */}
          Turn Any <span className="text-purple-600">Idea</span> into Videos <br />
          For <span className="text-purple-500">Influencers</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Turn your ideas into faceless videos in minutes with our AI-powered platform.
          Create engaging videos with high-quality visuals, dynamic captions, and natural-sounding voiceovers effortlessly.
          Perfect for marketers, influencers, or creators—video production has never been easier!
        </p>

        <div className="mt-8">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition">
            Try Videooze Free
          </button>
        </div>

        <div className="mt-12 mx-auto" style={{
          width: "873px",
          height: "523px",
        }}>
          <img
            src={centerImg}
            alt="Video Preview"
            className="w-full h-full object-cover rounded-[20px] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;