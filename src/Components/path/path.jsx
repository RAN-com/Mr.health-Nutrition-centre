import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'

const PathInput = () => {
  const [pathValue, setPathValue] = useState('');
//   const history = useHistory();

  const handleChange = (e) => {
    setPathValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the entered path
    history.push(pathValue);
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={pathValue}
          onChange={handleChange}
          placeholder="Enter a path or URL"
          className="py-2 px-4 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-r-md ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default PathInput;
