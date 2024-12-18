import React from 'react';

const Header = () => (
  <header className="min-h-[40vh] relative bg-gradient-to-br from-purple-800 to-blue-700 text-white py-6 px-10">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="bg-purple-700 w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">H</div>
        <h1 className="text-2xl font-lastica tracking-wide">ASCEND.INC</h1>
      </div>
    </div>
  </header>
);

export default Header;