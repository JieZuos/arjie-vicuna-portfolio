import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const useMouseOverEffect = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const textRef = useRef(null);

  const handleMouseOver = (event) => {
    const { dataset: { value } } = event.target;
    let iteration = 0;

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 35);
  };
  
  return { handleMouseOver };
};

const About = () => {
  const { handleMouseOver } = useMouseOverEffect();

  return (
    <>
<div className='glitch about_text_p'>
              <h2 data-value="Passions" onMouseOver={handleMouseOver}>About My</h2>
            </div>
    </>
  );
};

export default About;
