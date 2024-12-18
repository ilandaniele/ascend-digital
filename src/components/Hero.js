import React from 'react';

const Hero = () => (
  <section className="min-h-[40vh] relative bg-gradient-to-br from-purple-800 to-blue-700 text-center text-white py-20 px-10">
    <div className="container mx-auto">
      <h2 className="text-left font-sans text-7xl mb-4">ASCEND DIGITAL</h2>
      <p className="text-left text-4xl mb-8">Agencia de Marketing Digital</p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-40"></div>
  </section>
);

export default Hero;