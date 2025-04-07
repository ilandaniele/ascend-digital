// components/ContactForm.js
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'El nombre es obligatorio';
    if (!formData.phone) formErrors.phone = 'El teléfono es obligatorio';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email || 'No proporcionado',
            message: formData.message || 'No proporcionado',
          },
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(() => {
          alert('Mensaje enviado con éxito');
          setFormData({ name: '', email: '', phone: '', message: '' });
          if (onClose) onClose();
        }, (error) => {
          console.error(error.text);
          alert('Hubo un error al enviar el mensaje');
        });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-200">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 bg-gray-800 block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:outline-none"
            placeholder="Tu nombre"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 bg-gray-800 block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:outline-none"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 bg-gray-800 block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:outline-none"
            placeholder="+54 9 11 6056-1605"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 bg-gray-800 block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:outline-none"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>
        <div className="text-left">
          <button
            type="submit"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-md text-lg font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none"
          >
            Enviar
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
