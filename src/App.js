import React from 'react';

import BackgroundWrapper from './components/BackgroundWrapper';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import FAQs from './components/FAQs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles/tailwind.css';

function App() {
  return (
    <div className="App">
      <BackgroundWrapper />
      <About />
      <Services />
      <Blog />
      <FAQs />
      <ContactForm />
      <Footer /> {/* issues at 620 */}
    </div>
  );
}

export default App;