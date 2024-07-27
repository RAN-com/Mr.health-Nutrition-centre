import React from 'react';
import backgroundImage from '../../assets/Rectangle 7.png';
import foregroundImage from '../../assets/Female-Doctor-PNG-Pic 1.png';

const FlexTwoColumnLayout = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-center justify-center p-6 bg-green-700">
      {/* Left Column - Images */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center p-4">
        {/* Layer 1: Background Image */}
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-auto object-cover"
        />
        {/* Layer 2: Foreground Image */}
        <img
          src={foregroundImage}
          alt="Doctor"
          className="absolute inset-0 m-auto w-4/5 md:w-3/5 h-auto object-contain"
        />
      </div>

      {/* Right Column - Text Content */}
      <div className="w-full md:w-1/2 p-6 md:p-16 bg-green-700 rounded-lg text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-white">Title</h2>
        <h3 className="text-xl font-semibold mb-4 text-white">Subtitle</h3>
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          sapien ac nulla dapibus aliquam. Morbi rutrum sodales odio vitae
          commodo. Sed lacinia augue id mi rhoncus, vel vestibulum libero
          efficitur.
        </p>
      </div>
    </div>
  );
};

export default FlexTwoColumnLayout;
