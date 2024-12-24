import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => (
  <footer className="relative bg-purple-900 text-white py-8">
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
      {/* Superposición oscura */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    {/* Contenido del footer */}
    <div className="relative container mx-auto"> {/*px-4 md:w-1/3 sm:ml-40 this is breaking change*/}
      <div className="flex flex-col items-start">
        <p className="mt-10 ml-10 font-lastica text-3xl">Phone</p>
        <p className="ml-10 text-2xl">(+598) 99 413-456</p>
        <p className="mt-10 ml-10 font-lastica text-3xl">Email</p>
        <p className="ml-10 text-2xl">hello@ascendigital.com</p>
        <p className="mt-10 ml-10 font-lastica text-3xl">Social</p>
        <div className="mt-4 ml-10 border p-4 rounded-md w-40 flex justify-center items-center">
          <SocialIcons />
        </div>
        {/* Sección de derechos reservados */}
        <p className="mt-10 ml-10 text-sm">
          &copy; {new Date().getFullYear()} Ascend Digital. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
