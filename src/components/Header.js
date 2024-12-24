import React from 'react';

const Header = () => (
  <header className="relative min-h-screen flex flex-col">
    {/* Video de fondo */}
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
      {/* Superposición para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    {/* Contenido */}
    <div className="relative z-10 text-white flex-grow flex flex-col justify-between">
      {/* Sección superior del Header */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:py-10 md:px-20">
        <div className="flex items-center space-x-4">
          <div className="bg-purple-700 w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">H</div>
          <h1 className="text-xl md:text-2xl font-lastica tracking-wide">ASCEND.INC</h1>
        </div>
      </div>
      {/* Sección Hero */}
      <div className="container mx-auto text-center py-10 px-6 md:py-20 md:px-20 flex-grow flex flex-col justify-center">
        <h2 className="text-left font-sans text-5xl md:text-8xl mb-4">ASCEND DIGITAL</h2>
        <p className="text-left text-2xl md:text-4xl mb-8">Agencia de Marketing Digital</p>
      </div>
    </div>
  </header>
);

export default Header;
