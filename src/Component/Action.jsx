import React from "react";
import ActionImage from "../assets/ActionImage.jpg";
import girlImage from "../assets/girlImage.jpg";
import MenImg from "../assets/MenImg.jpg";
import Vr from "../assets/Vr.jpg";
import Robot from "../assets/Robot.jpg";
import playingVr from "../assets/playingVr.jpg";

const Action = () => {
  return (
    <section className="pt-20 px-4 bg-white"> {/* Kept top padding, removed bottom padding */}
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading - kept original spacing */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            See our <span className="text-purple-500">AI in action</span>
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            Create stunning videos within no time
          </p>
        </div>

        {/* Images Container - adjusted height to exact content needs */}
        <div className="relative mt-12" style={{ 
          height: '562px', // 330px (top image) + 37px gap + 175px (bottom row) + 20px buffer
          marginBottom: '0' // Remove any bottom margin
        }}>
          {/* Left Column Images */}
          <div className="absolute left-0">
            {/* Main Action Image */}
            <div style={{
              width: '584px',
              height: '330px',
              borderRadius: '15px',
              overflow: 'hidden',
              position: 'absolute',
              top: '0'
            }}>
              <img
                src={ActionImage}
                alt="Main Action"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Girl Image */}
            <div style={{
              width: '233px',
              height: '175px',
              borderRadius: '15px',
              overflow: 'hidden',
              position: 'absolute',
              top: '367px' // 330px + 37px
            }}>
              <img
                src={girlImage}
                alt="Girl"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Men Image */}
            <div style={{
              width: '321px',
              height: '175px',
              borderRadius: '15px',
              overflow: 'hidden',
              position: 'absolute',
              top: '367px',
              left: '263px' // 233px + 30px
            }}>
              <img
                src={MenImg}
                alt="Men"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column Images */}
          <div className="absolute left-0 ml-[616px]"> {/* 584px + 32px */}
            {/* VR Image */}
            <div style={{
              width: '358px',
              height: '269px',
              borderRadius: '15px',
              overflow: 'hidden',
              position: 'absolute',
              top: '0'
            }}>
              <img
                src={Vr}
                alt="VR"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Robot Image */}
            <div style={{
              width: '355px',
              height: '240px',
              borderRadius: '15px',
              overflow: 'hidden',
              position: 'absolute',
              top: '302px' // 269px + 33px
            }}>
              <img
                src={Robot}
                alt="AI Robot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Far Right Image (Playing VR) */}
          <div className="absolute left-2 ml-[974px]"> {/* 584 + 358 + 32px */}
            <div style={{
              width: '308px',
              height: '546px',
              borderRadius: '15px',
              overflow: 'hidden',
              position: 'absolute',
              top: '0'
            }}>
              <img
                src={playingVr}
                alt="Playing VR"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;