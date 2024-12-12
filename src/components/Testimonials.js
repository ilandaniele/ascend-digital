import React from 'react';

const Testimonials = () => (
  <section id="testimonials" className="bg-gray-100 py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <blockquote className="p-6 bg-white shadow rounded">
          <p className="text-gray-700 italic">"Amazing results! My business has grown exponentially."</p>
          <footer className="mt-4 text-gray-900 font-semibold">- John Doe</footer>
        </blockquote>
        <blockquote className="p-6 bg-white shadow rounded">
          <p className="text-gray-700 italic">"Professional team and excellent service."</p>
          <footer className="mt-4 text-gray-900 font-semibold">- Jane Smith</footer>
        </blockquote>
      </div>
    </div>
  </section>
);

export default Testimonials;
