import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; // Importa framer-motion

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', sectionId: 'presentation' },
    { name: 'Servicios', sectionId: 'services' },
    { name: '¿Por qué elegirnos?', sectionId: 'whyus' },
    { name: 'Preguntas Frecuentes', sectionId: 'faqs' },
    { name: 'Contacto', sectionId: 'contact' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = -60; // Ajuste para que el header no tape las secciones
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMenuOpen(false); // Cierra el menú después de hacer clic en un elemento
  };

  // Animación para los elementos del menú
  const menuVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-30 px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Menú hamburguesa */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => scrollToSection('presentation')}
          >
            <div className="h-16 w-auto overflow-hidden">
              <img
                src={require('../assets/logo.png')}
                alt="Logo Ascend Digital"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Navegación */}
        <AnimatePresence>
          {(menuOpen || window.innerWidth >= 768) && (
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-white md:bg-transparent md:bg-opacity-0 md:static md:flex md:items-center md:justify-center md:space-x-8"
            >
              <ul className="flex flex-col md:flex-row md:space-x-4 text-md md:text-lg">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="hover:text-custom-pink cursor-pointer transition-colors duration-200 px-4 py-2 md:px-2 md:py-1"
                    onClick={() => scrollToSection(item.sectionId)}
                    variants={menuVariants}
                  >
                    {item.name}
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;