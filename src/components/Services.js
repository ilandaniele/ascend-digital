import React, { useState, useEffect, useRef, useCallback } from 'react';

const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const componentRef = useRef(null);
  const animationFrameId = useRef(null);

  const calculateOpacity = (translateX) => {
    let opacity;
    if (Math.abs(translateX) <= 250) {
      opacity = 1 - (Math.abs(translateX) / 250) * 0.999;
    } else {
      opacity = 0.001;
    }
    return opacity;
  };

  const calculateSkew = (translateX) => {
    let skew;
    if (translateX < -300) {
      skew = -15;
    } else if (translateX > 300) {
      skew = 15;
    } else {
      skew = (translateX / 300) * 15;
    }
    return skew;
  };

  const handleScroll = useCallback(() => {
    if (isVisible) {
      if (animationFrameId.current === null) {
        animationFrameId.current = requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          animationFrameId.current = null;
        });
      }
    }
  }, [isVisible]);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const currentRef = componentRef.current;
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleScroll, handleResize]);

  const getMinHeight = () => {
    if (windowWidth < 480) return "min-h-[120vh]";
    if (windowWidth < 640) return "min-h-[130vh]";
    if (windowWidth < 1024) return "min-h-[150vh]";
    if (windowWidth < 1530) return "min-h-[170vh]";
    return "min-h-[190vh]";
  };

  const getOffsets = () => {
    if (windowWidth < 480) {
      return [
        { text: "Diseño", direction: "left", offset: 200 },
        { text: "Branding", direction: "right", offset: -300 },
        { text: "Redes Sociales", direction: "left", offset: 400 },
        { text: "Marketing", direction: "right", offset: -600 },
        { text: "Anuncios", direction: "left", offset: 600 },
        { text: "Estrategia", direction: "right", offset: -800 },
      ];
    } else if (windowWidth < 640) {
      return [
        { text: "Diseño", direction: "left", offset: 0 },
        { text: "Branding", direction: "right", offset: -100 },
        { text: "Redes Sociales", direction: "left", offset: 200 },
        { text: "Marketing", direction: "right", offset: -300 },
        { text: "Anuncios", direction: "left", offset: 400 },
        { text: "Estrategia", direction: "right", offset: -500 },
      ];
    } else if (windowWidth < 1024) {
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
      return [
        { text: "Diseño", direction: "left", offset: 400 },
        { text: "Branding", direction: "right", offset: -550 },
        { text: "Redes Sociales", direction: "left", offset: 750 },
        { text: "Marketing", direction: "right", offset: -950 },
        { text: "Anuncios", direction: "left", offset: 1150 },
        { text: "Estrategia", direction: "right", offset: -1300 },
      ];
    }
  };

  const words = getOffsets();

  return (
    <section
      id="services"
      ref={componentRef}
      className={`flex flex-col items-center justify-center overflow-hidden bg-black ${getMinHeight()}`}
    >
      {words.map((word, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        const translateX = (-500 + scrollY) * direction + word.offset;
        const opacity = calculateOpacity(translateX);
        const skew = calculateSkew(translateX);

        return (
          <div
            key={index}
            className="text-7xl sm:text-8xl 2xl:text-9xl 3xl:text-10xl font-bold my-4 whitespace-nowrap text-white"
            style={{
              transform: `translate3d(${translateX}px, 0px, 0px) skew(${skew}deg, 0deg)`,
              opacity: Math.max(0.1, Math.min(1, opacity)),
              transition: 'transform 0.01s ease, opacity 0.01s ease',
            }}
          >
            {word.text}
          </div>
        );
      })}
    </section>
  );
};

export default Services;
