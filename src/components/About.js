import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Variantes para la animación
  const listVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Retardo entre cada punto
        duration: 0.5,
      },
    }),
  };

  const items = [
    "Somos una agencia de marketing digital especializada en potenciar la presencia digital de inmobiliarias.",
    "Nuestro equipo combina creatividad, análisis estratégico y herramientas digitales avanzadas para transformar la forma que contectas con tus clientes.",
    "Ofrecemos soluciones integrales: desarrollo web, gestión de redes sociales y campañas de marketing digital.",
    "Nos enfocamos en resultados concretos: aumentar tu visibilidad online y generar consultas calificadas, con soluciones personalizadas que se adaptan a tus objetivos.",
    "Nuestro enfoque está en generar resultados medibles y maximizar el retorno de inversión (ROI) para nuestros clientes.",
    "Estamos comprometidos a ayudarte a destacar en un mercado competitivo mediante estrategias personalizadas y herramientas de última generación.",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-800 text-white relative min-h-screen overflow-hidden"
    >
      <div className="container mx-auto flex justify-end px-10">
        <div className="w-full md:w-3/4 lg:w-2/3 px-4 md:ml-8 lg:ml-16">
          <h2 className="text-7xl mb-8">Acerca de Digital Ascend</h2>
          <ul className="list-disc list-outside text-2xl space-y-4 pl-6">
            {items.map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={listVariants}
                viewport={{ once: true, amount: 0.2 }}
                className="opacity-0"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
