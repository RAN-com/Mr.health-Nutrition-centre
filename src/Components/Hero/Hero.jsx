import { useState, useEffect } from 'react';
import imageSlide from '../../Data/Data';

const Hero = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState((prev) => (prev === imageSlide.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
  };

  const goToNext = (index) => {
    setCurrentState(index);
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={bgImageStyle}
      ></div>
      <div className="absolute inset-0 m-24  text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{imageSlide[currentState].title}</h1>
        <p className="text-lg md:text-2xl ">{imageSlide[currentState].body}</p><br/>
        
        <button className="bg-white text-green-400 font-bold py-2 px-4 rounded hover:bg-gray-200">
        Book your appienment
          </button>
        
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imageSlide.map((_, index) => (
          <span
            key={index}
            onClick={() => goToNext(index)}
            className={`cursor-pointer h-4 w-4 rounded-full transition-colors ${
              index === currentState ? 'bg-white' : 'bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
