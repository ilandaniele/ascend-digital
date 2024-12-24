import React from 'react';

const Blog = () => (
    <section id="blog" className="py-12 bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Blog</h2>
      <p className="text-center text-white mb-8">
        Una sección de blog genera tráfico orgánico a tu web, refuerza tu autoridad en el nicho y permite compartir tips útiles sobre marketing digital y el sector inmobiliario.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Artículos Educativos</h3>
          <ul className="list-disc list-inside text-white">
            <li>Cómo optimizar perfiles de Instagram</li>
            <li>Consejos para mostrar propiedades online</li>
          </ul>
        </article>
        <article className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
          <h3 className="text-xl font-semibold text-green-400 mb-4">Guías Rápidas</h3>
          <ul className="list-disc list-inside text-white">
            <li>Crear contenido atractivo en redes sociales</li>
            <li>Mejorar páginas web</li>
          </ul>
        </article>
        <article className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Tendencias</h3>
          <ul className="list-disc list-inside text-white">
            <li>Herramientas digitales para inmobiliarias</li>
            <li>Estrategias de captación de leads</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
);

export default Blog;