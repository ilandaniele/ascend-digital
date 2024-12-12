import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialIcons = () => (
  <div className="flex space-x-4">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
      <FaFacebook size={24} />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
      <FaInstagram size={24} />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
      <FaTwitter size={24} />
    </a>
  </div>
);

export default SocialIcons;