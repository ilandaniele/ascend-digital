import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

const SocialIcons = ({ iconsToShow = [], iconClasses = {} }) => {
  const availableIcons = {
    facebook: {
      icon: <FaFacebook size={24} />,
      link: 'https://www.facebook.com',
    },
    instagram: {
      icon: <FaInstagram size={24} />,
      link: 'https://www.instagram.com',
    },
    whatsapp: {
      icon: <FaWhatsapp size={24} />,
      link: 'https://www.whatsapp.com',
    },
    twitter: {
      icon: <FaXTwitter size={24} />,
      link: 'https://www.twitter.com',
    },
  };

  return (
    <div className="flex space-x-4">
      {iconsToShow.map((icon) => (
        <a
          key={icon}
          href={availableIcons[icon]?.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconClasses[icon] || 'text-white'} hover:opacity-80 transition-opacity duration-200`}
        >
          {availableIcons[icon]?.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
