import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Blog = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3, // Espaciado entre la aparición de los hijos
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="blog"
      className="py-12 bg-gray-900"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-8"
          variants={itemVariants}
        >
          Blog
        </motion.h2>
        <motion.p
          className="text-center text-white mb-8"
          variants={itemVariants}
        >
          Descubrí estrategias prácticas de marketing digital y herramientas
          clave para potenciar tu negocio inmobiliario mientras posicionás tu
          marca en el sector.
        </motion.p>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          <motion.article
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Artículos Educativos
            </h3>
            <ul className="list-disc list-inside text-white">
              <li>Cómo optimizar perfiles de Instagram</li>
              <li>Consejos para mostrar propiedades online</li>
            </ul>
          </motion.article>
          <motion.article
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Guías Rápidas
            </h3>
            <ul className="list-disc list-inside text-white">
              <li>Crear contenido atractivo en redes sociales</li>
              <li>Mejorar páginas web</li>
            </ul>
          </motion.article>
          <motion.article
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Tendencias
            </h3>
            <ul className="list-disc list-inside text-white">
              <li>Herramientas digitales para inmobiliarias</li>
              <li>Estrategias de captación de leads</li>
            </ul>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blog;
