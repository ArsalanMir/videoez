import React from "react";
import ActionImage from "../assets/ActionImage.jpg";
import girlImage from "../assets/girlImage.jpg";
import MenImg from "../assets/MenImg.jpg";
import Vr from "../assets/Vr.jpg";
import Robot from "../assets/Robot.jpg";
import playingVr from "../assets/playingVr.jpg";

const Action = () => {
  return (
    <section className="w-full bg-white pt-10 px-4">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          See our <span className="text-purple-500">AI in action</span>
        </h2>
        <p className="mt-2 text-gray-600 text-lg">
          Create stunning videos within no time
        </p>
      </div>

      {/* Desktop Layout - only visible on lg and up */}
      <div className="hidden lg:block relative w-full overflow-x-hidden">
        <div className="relative w-full px-4 lg:px-8 xl:px-16" style={{ height: "562px" }}>
          {/* Left Column */}
          <div className="absolute top-0 left-0 w-[calc(50%-16px)]">
            {/* Main Action Image */}
            <div className="absolute top-0 left-0 w-full h-[330px] rounded-xl overflow-hidden">
              <img src={ActionImage} alt="Main Action" className="w-full h-full object-cover" />
            </div>

            {/* Girl Image */}
            <div className="absolute top-[367px] left-0 w-[40%] h-[175px] rounded-xl overflow-hidden">
              <img src={girlImage} alt="Girl" className="w-full h-full object-cover" />
            </div>

            {/* Men Image */}
            <div className="absolute top-[367px] left-[42%] w-[58%] h-[175px] rounded-xl overflow-hidden">
              <img src={MenImg} alt="Men" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Middle Column */}
          <div className="absolute top-0 left-[50%] w-[30%] ml-2">
            <div className="absolute top-0 w-full h-[269px] rounded-xl overflow-hidden">
              <img src={Vr} alt="VR" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[302px] w-full h-[240px] rounded-xl overflow-hidden">
              <img src={Robot} alt="Robot" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Far Right */}
          <div className="absolute top-0 left-[82%] w-[16%] ml-2">
            <div className="w-full h-[546px] rounded-xl overflow-hidden">
              <img src={playingVr} alt="Playing VR" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - only visible on smaller screens */}
      <div className="lg:hidden flex flex-col gap-4 mt-10 px-4">
        <img src={ActionImage} alt="Main" className="rounded-xl w-full object-cover" />
        <div className="flex gap-4">
          <img src={girlImage} alt="Girl" className="rounded-xl w-1/2 object-cover" />
          <img src={MenImg} alt="Men" className="rounded-xl w-1/2 object-cover" />
        </div>
        <img src={Vr} alt="VR" className="rounded-xl w-full object-cover" />
        <img src={Robot} alt="Robot" className="rounded-xl w-full object-cover" />
        <img src={playingVr} alt="Playing VR" className="rounded-xl w-full object-cover" />
      </div>
    </section>
  );
};

export default Action;
