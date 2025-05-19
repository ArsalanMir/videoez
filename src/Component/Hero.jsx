import React from "react";
import centerImg from "../assets/centerImg.png";
import backgroundImage from "../assets/BackgroundImg.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center px-4 overflow-hidden mb-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold leading-tight text-gray-900 pt-0">
          Turn Any{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(84.88deg, #413FC2 18.63%, #C668FD 81.37%)" }}>
            Idea
          </span>{" "}
          into Videos
          <br />
          For{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(84.88deg, #413FC2 18.63%, #C668FD 81.37%)" }}>
            Influencers
          </span>
        </h1>

        <p className="mt-6 text-xs sm:text-sm text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Turn your ideas into faceless videos in minutes with our AI-powered platform. Create engaging videos
          with high-quality visuals, dynamic captions, and natural-sounding voiceovers effortlessly. Perfect for
          marketers, influencers, or creators—video production has never been easier!
        </p>

        <div className="mt-8">
          <button className="text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition" style={{ backgroundImage: "linear-gradient(84.88deg, #413FC2 18.63%, #C668FD 81.37%)" }}>
            Try Videooze Free
          </button>
        </div>

        <div
          className="mt-12 mx-auto"
          style={{
            width: "873px",
            height: "523px",
          }}
        >
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