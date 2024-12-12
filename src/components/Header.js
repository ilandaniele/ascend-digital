import React from 'react';

const Header = () => (
  <header className="bg-blue-500 text-white p-4">
    <h1 className="text-3xl font-bold">Ascend Digital</h1>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#services" className="hover:underline">Services</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
