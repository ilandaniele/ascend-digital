import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: '¿Qué servicios ofrece Ascend Digital?',
    answer: 'Nos especializamos en diseño y optimización de páginas web, campañas de marketing en redes sociales, gestión de Google Ads y SEO, y análisis de resultados para inmobiliarias.',
  },
  {
    question: '¿Cómo garantizan que sus estrategias sean efectivas?',
    answer: 'Nos enfocamos en generar consultas calificadas, optimizando la visibilidad online y proporcionando reportes claros para medir el impacto de nuestras estrategias.',
  },
  {
    question: '¿Qué diferencia a Ascend Digital de otras agencias?',
    answer: 'No solo brindamos servicios, sino soluciones personalizadas con resultados medibles. Nuestro enfoque está en el sector inmobiliario, entendiendo sus desafíos específicos.',
  },
  {
    question: '¿Pueden ayudarme si no tengo experiencia previa en marketing digital?',
    answer: '¡Por supuesto! Diseñamos estrategias adaptadas a tus necesidades y te acompañamos en todo el proceso para que logres tus objetivos.',
  },
  {
    question: '¿Qué tan rápido veré resultados?',
    answer: 'Los resultados pueden variar según los servicios contratados, pero generalmente, nuestras campañas comienzan a generar consultas en pocas semanas.',
  },
  {
    question: '¿Es necesario tener una página web para trabajar con ustedes?',
    answer: 'No es indispensable, pero recomendamos contar con una página optimizada para maximizar los resultados. Si no tienes una, ¡podemos crearla para ti!',
  },
  {
    question: '¿Cuánto cuesta contratar sus servicios?',
    answer: 'Ofrecemos planes adaptados a diferentes necesidades y presupuestos. Contáctanos para agendar una consulta gratuita y recibir una propuesta personalizada.',
  },
];

const FAQs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 },
    }),
  };

  return (
    <motion.section
      id="faqs"
      className="relative py-20 bg-black"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {/* <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src={require('../assets/vecteezy_pink-color-digital-particle-wave-in-cyberspace-abstract_27681863-2.mp4')} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div> */}
      <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-white"
          variants={variants}
        >
          Preguntas Frecuentes
        </motion.h2>
        <motion.div className="backdrop-blur-md bg-white/15 rounded-lg p-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQs;
