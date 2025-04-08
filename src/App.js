import React from 'react';

import Header from './components/Header';
import Presentation from './components/Presentation';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Blog from './components/Blog';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import './styles/tailwind.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Services />
      <WhyUs />
      <Blog />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;