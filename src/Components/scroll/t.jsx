<div className="min-h-screen p-4 flex flex-col md:flex-row">
{/* Input Column */}
<div className="md:w-1/3 p-4">
  <h2 className="text-xl font-bold mb-4">Input</h2>
  <input
    type="number"
    placeholder="Weight (kg)"
    value={weight}
    onChange={(e) => setWeight(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded mb-4"
  />
  <input
    type="number"
    placeholder="Height (cm)"
    value={height}
    onChange={(e) => setHeight(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded mb-4"
  />
  <select
    value={gender}
    onChange={(e) => setGender(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded mb-4"
  >
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
  <button
    onClick={calculateBMI}
    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
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
      <p className="text-lg">Enter your details and click "Calculate BMI" to see your result.</p>
    )}
  </div>
</div>
</div>

<div className="min-h-screen flex flex-col items-center justify-center  bg-green-700    p-4"
    style={{ borderTopLeftRadius: '110%', borderTopRightRadius: '110%' }}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-8x2 w-full  shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2 w-5 h-70">
          <img
            src="../../../public/Asset1@4x1.png"
            alt="Example"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full p-6">
          <h2 className="text-3xl font-bold mb-4">Responsive Layout</h2>
          <p className="text-lg mb-4">
            This is an example of a responsive layout using Tailwind CSS. The layout consists of two columns: one for the image and one for the text content.
          </p>
          <p className="text-lg">
            The layout adjusts automatically to different screen sizes. On smaller screens, the image and text stack vertically. On larger screens, they are displayed side by side.
          </p>
       
    
      
    
    </div>
    
    </div>