import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      className="relative bg-purple-900 text-white py-8 min-h-screen overflow-hidden flex items-end pb-20"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {/* Video de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source
            src={require('../assets/vecteezy_pink-color-digital-particle-wave-in-cyberspace-abstract_27681863-2.mp4')}
            type="video/mp4"
          />
          Tu navegador no soporta la reproducción de videos.
        </video>
        {/* Superposición oscura */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Contenido del footer */}
      <motion.div
        className="relative container mx-auto flex flex-col items-start justify-center mb-10"
        variants={variants}
      >
        <motion.p className="mt-16 ml-10 font-lastica text-3xl" variants={itemVariants}>
          Phone
        </motion.p>
        <motion.p className="ml-10 text-2xl text-custom-pink" variants={itemVariants}>
          (+598) 99 413-456
        </motion.p>

        <motion.p className="mt-16 ml-10 font-lastica text-3xl" variants={itemVariants}>
          Email
        </motion.p>
        <motion.p className="ml-10 text-2xl text-custom-pink" variants={itemVariants}>
          hello@ascendigital.com
        </motion.p>

        <motion.p className="mt-16 ml-10 font-lastica text-3xl" variants={itemVariants}>
          Social
        </motion.p>
        <motion.div
          className="mt-6 ml-10 border p-4 rounded-md w-50 flex justify-center items-center"
          variants={itemVariants}
        >
          <SocialIcons iconsToShow={['facebook', 'instagram', 'twitter', 'whatsapp']} />
        </motion.div>

        {/* Sección de derechos reservados */}
        <motion.p className="mt-16 ml-10 text-sm text-custom-pink" variants={itemVariants}>
          &copy; {new Date().getFullYear()} Ascend Digital. Todos los derechos reservados.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
