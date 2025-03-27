// SocialIcons.js
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaTwitch,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa6';
import { motion } from 'framer-motion';

const SocialIcons = ({ iconsToShow = [], iconClasses = {}, animateOnHover = true, hoverColor = '#FFD700' }) => {
  const availableIcons = {
    facebook: {
      icon: <FaFacebook size={24} />,
      link: 'https://www.facebook.com/AjedrezHOY',
    },
    instagram: {
      icon: <FaInstagram size={24} />,
      link: 'https://www.instagram.com/ascendigitalmkt_',
    },
    whatsapp: {
      icon: <FaWhatsapp size={24} />,
      link: 'https://wa.me/59899413456',
    },
    twitter: {
      icon: <FaXTwitter size={24} />,
      link: 'https://x.com/AjedrezHOY',
    },
    twitch: {
      icon: <FaTwitch size={24} />,
      link: 'https://www.twitch.tv/ajedrezhoy',
    },
    youtube: {
      icon: <FaYoutube size={24} />,
      link: 'https://www.youtube.com/AjedrezHOY',
    },
    tiktok: {
      icon: <FaTiktok size={24} />,
      link: 'https://www.tiktok.com/@ajedrezhoy',
    },
  };

  return (
    <div className="flex space-x-4">
      {iconsToShow.map((icon) => (
        <motion.a
          key={icon}
          href={availableIcons[icon]?.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={animateOnHover ? { y: -6 } : {}}
          className={`text-white transition-all duration-300 ${iconClasses[icon] || ''}`}
          style={{ '--hover-color': hoverColor }}
        >
          <span className="hover:text-[color:var(--hover-color)]">
            {availableIcons[icon]?.icon}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
