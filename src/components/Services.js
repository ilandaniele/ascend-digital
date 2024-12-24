import React from 'react';

const Services = () => (
  <section id="why" className="py-20 bg-black text-white">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
      <div>
        <h2 className="text-4xl font-bold mb-4">Servicios que Ofrecemos</h2>
        <ul className="text-lg space-y-4">
          <li>Diseño y optimizacion Web</li>
          <li>Páginas modernas, responsivas y orientadas a convertir visitas en consultas.</li>
          <li>Contenido y Optimización de Redes Sociales.</li>
          <li>Creación de publicaciones estratégicas y gestión de perfiles como Instagram.</li>
          <li>Anuncios Pagos en Redes Sociales</li>
          <li>Campañas diseñadas para captar clientes potenciales y aumentar consultas.</li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-48 h-48 bg-gradient-to-r from-purple-700 to-blue-600 animate-pulse"></div>
      </div>
    </div>
  </section>
);

export default Services;