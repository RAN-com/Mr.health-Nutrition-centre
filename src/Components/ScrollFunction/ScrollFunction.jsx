import React from 'react';

const ScrollFunction = ({ scrollTargetRef }) => {
  const handleClick = () => {
    scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
      onClick={handleClick}
    >
      Scroll to Content
    </button>
  );
};

export default ScrollFunction;
