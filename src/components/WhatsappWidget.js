import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsappWidget = () => {
  const [visible, setVisible] = useState(false);

  const phoneNumber = "59899413456";
  const message = "¡Hola! Quisiera más información.";

  useEffect(() => {
    const handleScroll = () => {
      const presentation = document.getElementById("presentation");
      const offset = 100;

      if (presentation) {
        const bottom = presentation.getBoundingClientRect().bottom;
        setVisible(bottom < -offset); // aparece cuando pasás por completo
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // por si ya estás abajo al cargar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
          exit={{ opacity: 0, y: 50 }}
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-50 cursor-pointer bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
          <FaWhatsapp className="text-3xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsappWidget;
