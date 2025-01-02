import React from 'react';

const Header = () => {
  const menuItems = [
    { name: 'Inicio', sectionId: 'presentation' },
    { name: 'Servicios', sectionId: 'services' },
    { name: 'Preguntas Frecuentes', sectionId: 'faqs' },
    { name: 'Contacto', sectionId: 'contactForm' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = -80; // Ajusta este valor para controlar cuánto espacio se deja
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-50 py-4 px-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo más grande alineado a la izquierda */}
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => scrollToSection('presentation')}
        >
          <img
            src={require('../assets/logo.png')}
            alt="Logo Ascend Digital"
            className="h-16 md:h-20" /* Aumenté el tamaño del logo */
          />
        </div>

        {/* Navegación centrada */}
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-10 text-lg text-white">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-custom-pink cursor-pointer transition-colors duration-200 hover:border hover:text-custom-pink  hover:rounded-md px-3 py-2"
                onClick={() => scrollToSection(item.sectionId)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
