'use client';

import { useState } from 'react';
import MenuMobile from './MenuMobile';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[999] flex justify-between items-start px-4 py-4 text-white pointer-events-none mt-0" >
        
        {/* LADO ESQUERDO: Menu Vertical (Fixed Style) */}
        <div className="flex flex-col gap-1 text-[12px] font-bold tracking-tight uppercase pointer-events-auto">
          {['Work', 'Services', 'About', 'BTS'].map((item) => (
            <a
              key={item}
              href="#"
              className="group flex items-center gap-2 w-fit text-white"
            >
              {/* Travessão animado */}
              <span
                className="
                  block 
                  h-[1px] 
                  bg-white 
                  w-0 
                  transition-all 
                  duration-500 
                  ease-[cubic-bezier(.14,.41,0,.99)]
                  group-hover:w-4
                "
              />

              {/* Texto que desloca */}
              <span
                className="
                  transition-transform 
                  duration-500 
                  ease-[cubic-bezier(0.76,0,0.24,1)]
                  group-hover:translate-x-1
                "
              >
                {item}
              </span>
            </a>
          ))}
        </div>

        {/* CENTRO: Logo (Boxed Style) */}
        <div className="flex flex-col items-center leading-none scale-90 lg:scale-100 absolute left-[50%] translate-x-[-50%]">
          <div className="border-[1.5px] border-white px-3 py-1 text-1rem font-light tracking-[0.4em]">
            1 8 2 0
          </div>
          <div className="border-x-[1.5px] border-b-[1.5px] border-white px-3 py-0.5 text-[7px] tracking-[0.7em] font-black uppercase">
            Productions
          </div>
        </div>

        {/* DIREITO: Botões */}
        <div className="flex gap-3">
          <button className='"bg-white/10 backdrop-blur-md border border-white/40 px-1.5 py-1 text-[12px] font-bold tracking-tighter hover:bg-white hover:text-black transition-all uppercase cursor-pointer pointer-events-auto'>
            Let's Talk
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white/10 backdrop-blur-md border border-white/40 px-3 py-1 text-[12px] font-bold tracking-tighter hover:bg-white hover:text-black transition-all uppercase cursor-pointer pointer-events-auto z-90"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      <MenuMobile isOpen={isMenuOpen} />
    </>
  );
}