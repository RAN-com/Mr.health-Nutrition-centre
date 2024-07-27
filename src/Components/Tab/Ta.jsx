import React, { useState } from 'react';
import boy from '../../assets/boy.png';
import './tA.css'; // Import the CSS file

const Hexagon = ({ className, onClick }) => (
  <div className={`hexagon ${className} hover:bg-white cursor-pointer`} onClick={onClick}>
    <img className="w-full h-full object-cover" src={boy} alt="Hexagon Image" />
  </div>
);

const Tab = () => {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {
    setToggle(id);
  };

  return (
    <div className="md:w-2/3 p-4">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <div className="flex flex-col items-center">
        <div className="flex justify-center mb-4">
          <Hexagon className="hexagon1" onClick={() => updateToggle(1)} />
        </div>

        <div className="flex justify-center mb-4">
          <Hexagon className="hexagon2" onClick={() => updateToggle(1)} />
          <Hexagon className="hexagon2" onClick={() => updateToggle(2)} />
        </div>

        <div className="flex justify-center">
          <Hexagon className="hexagon3" onClick={() => updateToggle(1)} />
          <Hexagon className="hexagon3" onClick={() => updateToggle(2)} />
          <Hexagon className="hexagon3" onClick={() => updateToggle(3)} />
        </div>
      </div>
    </div>
  );
};

export default Tab;
