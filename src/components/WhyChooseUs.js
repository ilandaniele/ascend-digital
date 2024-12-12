import React from 'react';

const WhyChooseUs = () => (
  <section id="why" className="py-20 bg-black text-white">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-4xl font-bold mb-4">Por qué elegirnos</h2>
        <ul className="text-lg space-y-4">
          <li>Experiencia especializada en marketing digital inmobiliario.</li>
          <li>Soluciones integrales desde desarrollo web hasta campañas digitales.</li>
          <li>Resultados medibles con análisis y optimización constante.</li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-48 h-48 bg-gradient-to-r from-purple-700 to-blue-600 animate-pulse"></div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;