// FAQs.js
import React from 'react';
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
    answer: 'Ofrecemos planes adaptados a diferentes necesidades y presupuestos. Contáctanos para agendar una consulta gratuita y recibir una propuesta personalizada.',
  }
  // Agrega más preguntas y respuestas según sea necesario
];

const FAQs = () => (
  <section id="faqs" className="relative py-20 bg-gradient-to-b from-purple-600 to-blue-500">
    <div className="absolute inset-0 overflow-hidden">
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
    </div>
    <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Preguntas Frecuentes</h2>
      <div className="backdrop-blur-md bg-white bg-opacity-50 rounded-lg p-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  </section>
);


export default FAQs;
