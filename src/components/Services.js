import React, { useState, useEffect, useRef, useCallback } from 'react';

const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Estado para el ancho de la ventana
  const componentRef = useRef(null);

  const calculateOpacity = (translateX) => {
    // Si translateX está entre -250 y 250, calculamos la opacidad
    var opacity;
    if (Math.abs(translateX) <= 250) {
      opacity = 1 - (Math.abs(translateX) / 250) * 0.999; // Aseguramos que la opacidad llegue a 0.001
    } else {
        // Si translateX está fuera del rango, la opacidad es 0.001
      opacity = 0.001;
    }
    return opacity;
  };

  const calculateSkew = (translateX) => {
    var skew;
    if (translateX < -250) {
      skew = -15;
    } else if (translateX > 250) {
      skew = 15;
    } else {
      skew = (translateX / 250) * 15;
    }
    return skew;
  };

  // Usamos useCallback para memoizar handleScroll y evitar errores de ESLint
  const handleScroll = useCallback(() => {
    if (isVisible) {
      setScrollY(window.scrollY);
    }
  }, [isVisible]);

  // Función para manejar el cambio de tamaño de la ventana
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0, // Activa cuando el componente es visible
      }
    );

    const currentRef = componentRef.current; // Copiamos la referencia para usarla en el cleanup
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize); // Escuchamos el evento resize
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize); // Limpiamos el listener de resize
    };
  }, [handleScroll, handleResize]);

  // Definimos los offsets según el ancho de la pantalla
  const getOffsets = () => {
    if (windowWidth < 640) {
      // Mobile
      return [
        { text: "Diseño", direction: "left", offset: 0 },
        { text: "Branding", direction: "right", offset: -100 },
        { text: "Redes Sociales", direction: "left", offset: 200 },
        { text: "Marketing", direction: "right", offset: -300 },
        { text: "Anuncios", direction: "left", offset: 400 },
        { text: "Estrategia", direction: "right", offset: -500 },
      ];
    } else if (windowWidth < 1024) {
      // Tablet
      return [
        { text: "Diseño", direction: "left", offset: 0 },
        { text: "Branding", direction: "right", offset: -200 },
        { text: "Redes Sociales", direction: "left", offset: 400 },
        { text: "Marketing", direction: "right", offset: -500 },
        { text: "Anuncios", direction: "left", offset: 700 },
        { text: "Estrategia", direction: "right", offset: -800 },
      ];
    } else if (windowWidth < 1900) {
      return [
        { text: "Diseño", direction: "left", offset: 0 },
        { text: "Branding", direction: "right", offset: -200 },
        { text: "Redes Sociales", direction: "left", offset: 400 },
        { text: "Marketing", direction: "right", offset: -500 },
        { text: "Anuncios", direction: "left", offset: 700 },
        { text: "Estrategia", direction: "right", offset: -800 },
      ];
    } else {
      // Desktop
      return [
        { text: "Diseño", direction: "left", offset: 300 },
        { text: "Branding", direction: "right", offset: -500 },
        { text: "Redes Sociales", direction: "left", offset: 950 },
        { text: "Marketing", direction: "right", offset: -900 },
        { text: "Anuncios", direction: "left", offset: 1150 },
        { text: "Estrategia", direction: "right", offset: -1350 },
      ];
    }
  };

  const words = getOffsets(); // Obtenemos los offsets según el tamaño de la pantalla

  return (
    <div
      ref={componentRef}
      className="flex flex-col items-center justify-center min-h-[190vh] overflow-hidden bg-black"
    >
      {words.map((word, index) => {
        // Calculamos el desplazamiento horizontal basado en la dirección
        const direction = index % 2 === 0 ? -1 : 1; // Pares: izquierda, impares: derecha
        const translateX = (-500 + scrollY) * direction + word.offset;

        if (index === 5) {
          console.log('Scroll Y: ' + scrollY + ', translate X: ' + translateX + ', index: ' + index);
        }

        // Calculamos la opacidad basada en la distancia desde el centro en el eje Y
        const opacity = calculateOpacity(translateX);
        const skew = calculateSkew(translateX);

        return (
          <div
            key={index}
            className="text-7xl sm:text-8xl 2xl:text-9xl 3xl:text-10xl font-bold my-4 whitespace-nowrap text-white"
            style={{
              transform: `translate3d(${translateX}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(${skew}deg, 0deg)`,
              willChange: 'transform, opacity',
              opacity: opacity < 0.1 ? 0.1 : opacity > 1 ? 1 : opacity, // Limitar la opacidad entre 0 y 1
              transition: 'transform 0.5s ease, opacity 0.5s ease',
            }}
          >
            {word.text}
          </div>
        );
      })}
    </div>
  );
};

export default Services;