import React from 'react';
import aboutimg from '../../assets/Female-Doctor-PNG-Pic 1.png'
import layer from '../../assets/Rectangle 7.png'



const FlexTwoColumnLayout = () => {
  return (
    <div >
      
        
         
      {/* Column 1 - Photo */}
      <div className="  flex bg-green-700">
      <div className="relative  p-4">
   
      
      <img src={layer} alt="Placeholder" className="  inset-0 p-16 w-500 h-700 object-cover" />
        <img src={aboutimg} alt="Placeholder" className=" absolute inset-0 p-10 w-423 h-500 object-cover" />
      </div>

      {/* Column 2 - Text */}
      <div className="w-1/2  p-36 bg-green-700 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Title</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien ac nulla dapibus aliquam. Morbi rutrum sodales odio vitae commodo. Sed lacinia augue id mi rhoncus, vel vestibulum libero efficitur.
        </p>
        
      </div>
    </div>
   
    
    </div>
  );
};

export default FlexTwoColumnLayout;
