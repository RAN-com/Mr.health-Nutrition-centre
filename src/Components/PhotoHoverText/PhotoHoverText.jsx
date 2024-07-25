import React from 'react';
import img1 from '../../assets/Card 1.png';
import img2 from '../../assets/Card 2.png';
import img3 from '../../assets/Card 3.png';
import icon from '../../assets/Asset2@4x3.png';


const PhotoHoverText = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 p-6">
      <div className="relative">
        <img src={img1} alt="Card 1" className="rounded-lg shadow-lg justify-center" />
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg flex items-center space-x-4">
          <img src={icon} alt="Icon" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold">Weight loss</h1>
            <p>After 80kg to Before 63kg</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={img2} alt="Card 2" className="rounded-lg shadow-lg" />
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg flex items-center space-x-4">
          <img src={icon} alt="Icon" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold">Weight loss</h1>
            <p>After 80kg to Before 63kg</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={img3} alt="Card 3" className="rounded-lg shadow-lg" />
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg flex items-center space-x-4">
          <img src={icon} alt="Icon" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold">Weight loss</h1>
            <p>After 80kg to Before 63kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoHoverText;
