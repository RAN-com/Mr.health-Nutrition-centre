// src/SlideButton.js
import React, { useState } from 'react';

const SlideButton = () => {
  const [slide, setSlide] = useState(false);

  const toggleSlide = () => {
    setSlide(!slide);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={toggleSlide}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Toggle Slide
      </button>
      <p
        className={`px-4 py-2 transition-transform duration-500 ease-in-out transform ${
          slide ? 'translate-y-64' : '-translate-y-64'
        }`}
      >
        Sliding Button
      </p>
    </div>
  );
};

export default SlideButton;
