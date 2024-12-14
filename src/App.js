import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import FAQs from './components/FAQs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles/tailwind.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <FAQs />
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
}

export default App;