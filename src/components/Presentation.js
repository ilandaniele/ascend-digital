import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Header = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación se ejecutará solo una vez
    threshold: 0.2, // Cuando el 20% del elemento esté en vista
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section id="presentation">
    <div ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={require('../assets/vecteezy_pink-color-digital-particle-wave-in-cyberspace-abstract_27681863-2.mp4')} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      {/* Superposición para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Contenido */}
      <div className="relative z-10 text-white flex-grow flex flex-col justify-between">
        {/* Sección superior del Header */}
        <motion.div
          className="container mx-auto flex justify-between items-center py-4 px-6 md:py-10 md:px-20"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <img
            src={require('../assets/logo.png')}
            alt="Logo Ascend Digital"
            className="h-12 md:h-64"
          />
        </motion.div>
        {/* Sección Hero */}
        <motion.div
          className="container mx-auto text-center py-10 px-6 md:py-20 md:px-20 flex-grow flex flex-col justify-center"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <h2 className="text-left font-sans text-5xl md:text-8xl mb-4">ASCEND DIGITAL</h2>
          <p className="text-left text-2xl md:text-4xl mb-8">Agencia de Marketing Digital</p>
        </motion.div>
      </div>
    </div>
    </motion.section>
  );
};

export default Header;
