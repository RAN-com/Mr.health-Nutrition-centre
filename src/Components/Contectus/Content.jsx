import React from 'react';



const FlexTwoColumnLayou = () => {
  return (
    <div className="min-h-full bg-cover bg-center " style={{ backgroundImage: "url('../../../public/Group 10.png') "
        
     }}>
    <div className="p-4 flex flex-col md:flex-row">
      {/* Contact Us Column */}
      <div className="md:w-1/2 p-4 bg-gray-700 bg-opacity-80 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name "
              className="w-full p-2 text-white bg-slate-700  rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-2 text-white bg-slate-700  rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-2 text-white bg-slate-700  rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-2 text-white bg-slate-700  rounded"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </div>
      
      {/* Map Column */}
      <div className="md:w-1/2 p-4">
      
        <div className="w-full h-full bg-gray-200 rounded-lg">
          {/* Example placeholder for map */}
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6581616327246!2d-122.41773928468086!3d37.77902697975934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808ccab2e737%3A0xa6b78ab07b8fef5!2sApple%20Park!5e0!3m2!1sen!2sus!4v1651234585803!5m2!1sen!2sus"
            className="w-full h-full border-none rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    
  </div>
  )
};

export default FlexTwoColumnLayou;
