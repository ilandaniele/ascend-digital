import React, { useEffect } from "react";
import "particles.js";

const ParticlesBackground = () => {
  useEffect(() => {
    window.particlesJS.load("particles-js", "/particles-config.json", () => {
      console.log("Particles.js config loaded");
    });
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
        top: 0,
        left: 0,
        backgroundColor: "#4B0057" /* Fondo violeta oscuro */
      }}
    ></div>
  );
};

export default ParticlesBackground;
