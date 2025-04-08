import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope } from 'react-icons/fa';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="relative bg-black text-white overflow-hidden flex flex-col min-h-screen"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {/* Video de fondo */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/City2_high.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
  
      {/* Contenido principal centrado abajo */}
      <motion.div
        className="relative w-full flex-grow flex items-end justify-center px-6 pb-20"
        variants={variants}
      >
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Columna 1: Logo + contacto */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/logo.png"
                alt="Logo Ascend Digital"
                className="w-12 h-12 object-contain"
              />
              <p className="text-2xl font-semibold text-white">
                Ascend <span className="font-bold">Digital</span>
              </p>
            </div>

            <h3 className="text-white text-2xl font-bold uppercase tracking-wide">Contacto</h3>
            <div className="border-b-2 border-yellow-400 w-16 mb-6"></div>

            <div className="flex items-center gap-2 text-white text-lg">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:hello@ascendigitalmarketing.com">
                hello@ascendigitalmarketing.com
              </a>
            </div>

            <div className="mt-4">
              <SocialIcons
                iconsToShow={['instagram', 'twitter', 'facebook', 'whatsapp']}
                hoverColor="#FFD700"
              />
            </div>
          </motion.div>

          {/* Columna 2: Enlaces de interés */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-2">
              Enlaces de Interés
            </h3>
            <div className="border-b-2 border-yellow-400 w-28 mb-6"></div>
            <ul className="space-y-3 text-white text-lg">
              <li className="hover:text-yellow-400 cursor-pointer" onClick={() => scrollToSection('presentation')}>Inicio</li>
              <li className="hover:text-yellow-400 cursor-pointer">Política de Privacidad</li>
              <li className="hover:text-yellow-400 cursor-pointer">Aviso Legal</li>
              <li className="hover:text-yellow-400 cursor-pointer">Cookies</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

  
      {/* Pie de página */}
      <motion.div
        className="relative text-center text-sm text-gray-500 pb-4 z-10"
        variants={itemVariants}
      >
        &copy; {new Date().getFullYear()} Ascend Digital | Todos los derechos reservados.
      </motion.div>
    </motion.footer>
  );
  
};

export default Footer;
