import React from 'react';

const FAQs = () => (
  <section id="faqs" className="py-20 bg-gradient-to-b from-purple-600 to-blue-500 text-white">
    <div className="container mx-auto px-10">
      <h2 className="text-4xl font-bold text-center mb-8">FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">What is the advantage of hiring a consultant instead of doing it in-house?</h3>
          <p>Having an FAQ section is a great way to present information about your business.</p>
        </div>
        <div className="bg-pink-500 text-white p-6 rounded-lg">
          <p className="text-lg font-bold">Engage your audience!</p>
        </div>
      </div>
    </div>
  </section>
);

export default FAQs;