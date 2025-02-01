import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Services = () => {
  const { scrollYProgress } = useScroll();

  // Movimiento alternado de cada palabra
  const xDiseño = useTransform(scrollYProgress, [0.1, 0.3], ["-20vw", "40vw"]);
  const xBranding = useTransform(scrollYProgress, [0.1, 0.3], ["40vw", "-30vw"]);
  const xRedes = useTransform(scrollYProgress, [0.1, 0.3], ["-30vw", "30vw"]);
  const xMarketing = useTransform(scrollYProgress, [0.1, 0.3], ["60vw", "-10vw"]);
  const xAnuncios = useTransform(scrollYProgress, [0.1, 0.3], ["-50vw", "10vw"]);
  const xEstrategia = useTransform(scrollYProgress, [0.1, 0.3], ["90vw", "10vw"]);

  // Opacidad dinámica
  const opacityDiseño = useTransform(scrollYProgress, [0.1, 0.15, 0.2], [0.2, 1, 0.2]);
  const opacityBranding = useTransform(scrollYProgress, [0.15, 0.2, 0.25], [0.2, 1, 0.2]);
  const opacityRedes = useTransform(scrollYProgress, [0.2, 0.25, 0.3], [0.2, 1, 0.2]);
  const opacityMarketing = useTransform(scrollYProgress, [0.25, 0.3, 0.35], [0.2, 1, 0.2]);
  const opacityAnuncios = useTransform(scrollYProgress, [0.3, 0.35, 0.4], [0.2, 1, 0.2]);
  const opacityEstrategia = useTransform(scrollYProgress, [0.35, 0.4, 0.45], [0.2, 1, 0.2]);

  return (
    <section
      id="services"
      className="relative bg-black text-white min-h-[190vh] flex flex-col items-center justify-start w-full overflow-hidden"
    >
      <motion.div
        style={{ x: xDiseño, opacity: opacityDiseño }}
        className="text-6xl sm:text-9xl 2xl:text-9xl 3xl:text-12xl font-bold uppercase absolute top-[10%] mt-10 mb-10 left-4 sm:left-auto"
      >
        Diseño
      </motion.div>
      <motion.div
        style={{ x: xBranding, opacity: opacityBranding }}
        className="text-6xl sm:text-9xl 2xl:text-9xl 3xl:text-12xl font-bold uppercase absolute top-[20%] mt-10 mb-10 left-4 sm:left-auto"
      >
        Branding
      </motion.div>
      <motion.div
        style={{ x: xRedes, opacity: opacityRedes }}
        className="text-6xl sm:text-9xl 2xl:text-9xl 3xl:text-12xl font-bold uppercase absolute top-[30%] mt-10 mb-10 left-4 sm:left-auto"
      >
        Redes Sociales
      </motion.div>
      <motion.div
        style={{ x: xMarketing, opacity: opacityMarketing }}
        className="text-6xl sm:text-9xl 2xl:text-9xl 3xl:text-12xl font-bold uppercase absolute top-[40%] mt-10 mb-10 left-4 sm:left-auto"
      >
        Marketing
      </motion.div>
      <motion.div
        style={{ x: xAnuncios, opacity: opacityAnuncios }}
        className="text-6xl sm:text-9xl 2xl:text-9xl 3xl:text-12xl font-bold uppercase absolute top-[50%] mt-10 mb-10 left-4 sm:left-auto"
      >
        Anuncios
      </motion.div>
      <motion.div
        style={{ x: xEstrategia, opacity: opacityEstrategia }}
        className="text-6xl sm:text-9xl 2xl:text-9xl 3xl:text-12xl font-bold uppercase absolute top-[60%] mt-10 mb-10 left-4 sm:left-auto"
      >
        Estrategia
      </motion.div>
    </section>
  );
};

export default Services;