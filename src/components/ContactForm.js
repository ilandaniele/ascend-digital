import React from 'react';

const ContactForm = () => (
  <div className="text-left space-y-2">
    <section className="py-12 bg-gradient-to-b from-blue-600 to-purple-700 text-white">
    <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
    <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8">
        <form className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Tu nombre"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="tucorreo@ejemplo.com"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
                placeholder="Escribe tu mensaje aquí..."
            ></textarea>
            </div>
            <div>
            <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Enviar
            </button>
            </div>
        </form>
        </div>
    </div>
    </div>
    </section>
    </div>
);

export default ContactForm;