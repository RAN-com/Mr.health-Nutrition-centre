import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/mr1.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 justify-center items-center text-center">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Logo and About */}
          <div className="col-span-1 md:col-span-2">
        
            <img src={logo}/>
           </div>

          {/* Right Section - Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>
          
        </div>
        

        {/* Social Icons Section */}
        <div className="mt-8 flex items-center justify-center">
          <a href="#" className="text-white hover:text-gray-400 mx-3">
          <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-3">
          <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-3">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-3">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
