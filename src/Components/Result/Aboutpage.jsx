import React from 'react';
import { useParams } from 'react-router-dom';


const Aboutpage = () => {
  const { id } = useParams();

  // Normally you would fetch data from an API
  const card = {
    id: id,
    photo: 'https://via.placeholder.com/150',
    name: 'John Doe',
    content: 'This is detailed content about John.',
  };
  

  return (
    <div className="flex flex-col items-center p-6">
      <img src={card.photo} alt={card.name} className="w-32 h-32 object-cover rounded-full mb-4" />
      <h2 className="text-2xl font-bold mb-2">{card.name}</h2>
      <p className="text-gray-600 mb-4">{card.content}</p>
    </div>
  );
};

export default Aboutpage;
