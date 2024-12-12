import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => (
  <footer className="bg-purple-900 text-white py-8">
    <div className="container ml-40 py-20 px-10 text-center md:w-1/3">
      <p className="mb-12 text-left text-5xl">Get a quote or set up a consultation.</p>
      <p className="mt-10 text-left font-lastica text-3xl">Phone</p>
      <p className="text-left text-2xl">(+598) 99 413-456</p>
      <p className="mt-10 text-left font-lastica text-3xl">Email</p>
      <p className="text-left  text-2xl" >hello@ascendigital.com</p>
      <p className="mt-10 text-left font-lastica text-3xl">Social</p>
      <div className="mt-4 border p-4 rounded-md w-48 flex justify-center items-center">
        <SocialIcons />
      </div>
    </div>
  </footer>
);

export default Footer;