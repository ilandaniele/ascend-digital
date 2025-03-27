// Footer.js
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
      className="relative bg-black text-white py-8 min-h-screen overflow-hidden flex items-end"
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
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/City2_high.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Contenido del footer */}
      <motion.div
        className="relative container mx-auto flex flex-col items-start justify-center"
        variants={variants}
      >
        <motion.p className="mt-16 ml-10 font-lastica text-3xl" variants={itemVariants}>
          Telefono
        </motion.p>
        <motion.p className="ml-10 text-2xl text-white" variants={itemVariants}>
          (+598) 99 413-456
        </motion.p>

        <motion.p className="mt-16 ml-10 font-lastica text-3xl" variants={itemVariants}>
          Email
        </motion.p>
        <motion.p className="ml-10 text-2xl text-white" variants={itemVariants}>
          hello@ascendigitalmarketing.com
        </motion.p>

        <motion.p className="mt-16 ml-10 font-lastica text-3xl" variants={itemVariants}>
          Social
        </motion.p>
        <motion.div
          className="mt-2 ml-10 border p-4 rounded-md w-50 flex justify-center items-center gap-4"
          variants={itemVariants}
        >
          <SocialIcons iconsToShow={[
            'facebook', 'instagram', 'twitter', 'whatsapp']}
          />
        </motion.div>

        <motion.p className="mt-16 ml-10 text-sm text-white" variants={itemVariants}>
          &copy; {new Date().getFullYear()} Ascend Digital. Todos los derechos reservados.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;