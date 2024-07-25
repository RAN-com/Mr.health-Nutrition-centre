import React from 'react';
import { useNavigate } from 'react-router-dom';


const Result = ({ id, photo, name, content }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img src={photo} alt={name} className="w-32 h-32 object-cover rounded-full mb-4" />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Learn More
      </button>
    </div>
  );
};

export default Result;
