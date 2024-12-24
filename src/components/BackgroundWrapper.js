import React from 'react';
import Header from './Header';

const BackgroundWrapper = () => (
  <div className="relative h-screen overflow-hidden">
    {/* Video de fondo */}
    <video
      autoPlay
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={require('../assets/vecteezy_pink-color-digital-particle-wave-in-cyberspace-abstract_27681863-2.mp4')} type="video/mp4" />
      Tu navegador no soporta la reproducción de videos.
    </video>
    {/* Superposición para mejorar la legibilidad */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
    {/* Contenido */}
    <div className="relative">
      <Header />
    </div>
  </div>
);

export default BackgroundWrapper;
