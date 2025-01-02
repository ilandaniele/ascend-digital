import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
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
    "Diseño y optimización Web",
    "Páginas modernas, responsivas y orientadas a convertir visitas en consultas.",
    "Contenido y Optimización de Redes Sociales.",
    "Creación de publicaciones estratégicas y gestión de perfiles como Instagram.",
    "Anuncios Pagos en Redes Sociales",
    "Campañas diseñadas para captar clientes potenciales y aumentar consultas.",
  ];

  return (
    <section
      id="services"
      className="py-20 bg-black text-white relative min-h-screen overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-10 items-start">
        <div>
          <h2 className="text-7xl mb-4">Servicios que Ofrecemos</h2>
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
        <div className="flex items-center justify-center">
          <div className="w-48 h-48 bg-gradient-to-r from-purple-700 to-blue-600 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
