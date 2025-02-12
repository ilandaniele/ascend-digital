import React, { useState, useRef, useEffect } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0); // Estado para controlar la altura del contenido
  const contentRef = useRef(null); // Referencia al contenedor de la respuesta

  useEffect(() => {
    // Actualiza la altura del contenedor cuando se abre o cierra
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight); // Establece la altura máxima
    } else {
      setHeight(0); // Colapsa el contenedor
    }
  }, [isOpen]);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-black text-white rounded-t-lg focus:outline-none flex justify-between items-center"
      >
        <span className="text-lg font-medium">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: `${height}px`, // Controla la altura máxima
          overflow: 'hidden', // Oculta el contenido que excede la altura
          transition: 'max-height 0.2s ease-out', // Agrega una transición suave
        }}
        className="bg-gray-100 text-gray-800 rounded-b-lg"
      >
        <div className="p-4">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;