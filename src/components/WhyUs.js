import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyUs = () => {
  const services = [
    {
      title: "🚀 Soluciones Adaptadas",
      content:
        "Nos adaptamos a cualquier industria, entendiendo tus desafíos y objetivos específicos."
    },
    {
      title: "🎨 Creatividad + Estrategia",
      content:
        "Combinamos ideas innovadoras con análisis estratégico y herramientas digitales avanzadas."
    },
    {
      title: "📈 Resultados Comprobables",
      content:
        "Más visibilidad online, consultas calificadas y estrategias pensadas para maximizar tu ROI."
    },
    {
      title: "🤝 Acompañamiento Real",
      content:
        "No te dejamos solo. Ajustamos y optimizamos constantemente para que sigas creciendo."
    },
    {
      title: "❌ Sin Paquetes Prefabricados",
      content:
        "A diferencia de otras agencias que ofrecen soluciones genéricas, nosotros diseñamos estrategias personalizadas que se ajustan a tu negocio y tus necesidades reales."
    },
    {
      title: "⚡ Sin Humo, Solo Transparencia",
      content:
        "No te llenamos de tecnicismos ni promesas vacías. Sabés qué hacemos y por qué lo hacemos."
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className="bg-black text-white py-20 px-6"
    >
      <h2 className="text-6xl font-bold text-center mb-12 uppercase">
        ¿Por qué elegir <span className="text-blue-500">Ascend Digital</span>?
      </h2>
      <p className="text-center text-lg max-w-3xl mx-auto mb-16">
        Porque no hacemos marketing digital genérico: creamos estrategias que realmente funcionan para tu negocio.
      </p>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" variants={variants}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group perspective"
          >
            <div className="relative w-full h-48 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 flex items-center justify-center text-center text-2xl font-bold p-6 bg-gray-900 rounded-lg shadow-lg [backface-visibility:hidden]">
                {service.title}
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-lg bg-gray-800 p-6 rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                {service.content}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhyUs;