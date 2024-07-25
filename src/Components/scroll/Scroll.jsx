// App.js
import React from 'react';
import Content from '../../Components/scroll/Content'
import  { useState, useRef, useEffect } from 'react';
const Scroll = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
      setIsOpen(!isOpen);
    };
    const handleGenderChange = (e) => setGender(e.target.value);
  
    const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    }
  };
  
  return (
   
      
      <div className="min-h-screen flex flex-col items-center justify-center  bg-green-700    p-4"
    style={{ borderTopLeftRadius: '110%', borderTopRightRadius: '110%' }}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-8x2 w-full  shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2 w-5 h-70">
          <img
            src="../../../public/Asset 1@4x 1.png"
            alt="Example"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full p-6 text-white">
          <h2 className="text-4xl md:text-4xl font-bold mb-4">Responsive Layout</h2>
          <p className="text-2xl md:text-2xl font-bold mb-4">
            This is an example of a responsive layout using Tailwind CSS. The layout consists of two columns: one for the image and one for the text content.
          </p>
          <p className="text-lg">
            The layout adjusts automatically to different screen sizes. On smaller screens, the image and text stack vertically. On larger screens, they are displayed side by side.
          </p><br/>
          <button
        onClick={toggleContent}
        className=" text-1xl md:text-1xl font-bold  bg-transparent border-4 rounded-full border-white text-white  px-4 py-2 hover:bg-white hover:text-black"
      >
        {isOpen ? 'Close ' : 'Check Your Bmi'}
      </button>
    
      
    
    </div>
    
    </div>
    <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-screen p-4' : 'max-h-0'
        }`}
        style={{ maxHeight: isOpen ? '1000px' : '0' }}
      >
        <div className="bg-green-700   p-4 rounded-lg shadow-md">
        <div className="min-h-screen p-4 flex flex-col md:flex-row">
{/* Input Column */}
<div className="md:w-1/3 p-4">
  <h2 className="text-xl font-bold mb-4">Bmi Value</h2>
  <div>
    <h4 className='text-1xl md:text-1xl font-bold p-3'>Weight</h4>
    
  <input
    type="number"
    placeholder="Weight (kg)"
    value={weight}
    onChange={(e) => setWeight(e.target.value)}
    className="w-100 p-2 border border-gray-300 rounded-full mb-4"
  /></div>
  <input
    type="number"
    
    placeholder="Height (cm)"
    value={height}
    onChange={(e) => setHeight(e.target.value)}
    className="w-100 p-2 border border-gray-300 rounded-full mb-4"
  />
  <fieldset className={`mb-4`}>
        <legend className={`mb-3`}>Gender</legend>
        <label className={`mr-2`}>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={handleGenderChange}
            aria-label="Select Male as your gender"
            className={`mr-2`}
          />
          Male
        </label>
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={handleGenderChange}
            aria-label="Select Female as your gender"
            className={`mr-2`}
          />
          Female
        </label>
      </fieldset>
  
  <br/>
  <button
    onClick={calculateBMI}
    className="text-1xl md:text-1xl font-bold  bg-transparent border-4 rounded-full border-white text-white  px-4 py-2 hover:bg-white hover:text-black"
  >
    Calculate BMI
  </button>
</div>

{/* Image Column */}
<div className="md:w-2/3 p-4 flex items-center justify-center">
  <img
    src="../../../public/Asset1@4x2.png"
    alt="BMI Illustration"
    className="w-full h-auto rounded-lg"
  />
</div>

{/* BMI Output Column */}
<div className="md:w-1/3 p-4">
  <h2 className="text-xl font-bold mb-4">BMI Output</h2>
  <div className="bg-gray-100 p-4 rounded-lg shadow-md">
    {bmi !== null ? (
      <p className="text-lg">Your BMI is <strong>{bmi}</strong>.</p>
    ) : (
      <p className="text-lg text-center text-1xl md:text-1xl font-bold "> Result.</p>
    )}
  </div>
</div>
</div>
        </div>
      </div>
      
    </div>
    
    
      

  );
};

export default Scroll;
