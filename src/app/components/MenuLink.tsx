'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function MenuLink({ title }: { title: string }) {
  const container = useRef(null);
  const letters = title.split("");

  const { contextSafe } = useGSAP({ scope: container });

  const onMouseEnter = contextSafe(() => {
    gsap.to(".letter-inner", {
      y: "-50%",
      duration: 0.4,
      ease: "power2.inOut",
      stagger: 0.03,
    });
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to(".letter-inner", {
      y: "0%",
      duration: 0.7,
      ease: "power2.inOut",
      stagger: 0.03,
    });
  });

  return (
    <div 
      ref={container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // O 'w-fit' impede que o link ocupe a largura toda da tela
      // O 'font-sans' força a fonte sem serifa (adeus Times New Roman)
      className="flex w-fit cursor-pointer font-sans select-none"
    >
      {letters.map((char, index) => (
        <div key={index} className="overflow-hidden h-[30px] lg:h-[85px] relative">
          <div className="letter-inner flex flex-col">
            {/* Texto de cima */}
            <span className="flex items-center h-[30px] lg:h-[85px] text-6xl lg:text-6xl font-black uppercase tracking-tight leading-none">
              {char === " " ? "\u00A0" : char} 
            </span>
            {/* Texto de baixo (hover) */}
            <span className="flex items-center h-[30px] lg:h-[85px] text-6xl lg:text-6xl font-black uppercase tracking-tight leading-none text-red-600">
              {char === " " ? "\u00A0" : char}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}