import React from 'react';

const Services = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
          <p className="text-gray-700">Boost your website's visibility.</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-xl font-semibold mb-2">Content Marketing</h3>
          <p className="text-gray-700">Engage your audience with quality content.</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-700">Modern and responsive website designs.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;