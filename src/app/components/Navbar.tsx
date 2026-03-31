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
          {['Portfolio', 'Trabalhos', 'Sobre', 'Bastidores'].map((item) => (
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
                  bg-red-600 
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
                  transition-all 
                  duration-300 
                  ease-[cubic-bezier(0.76,0,0.24,1)]
                  group-hover:translate-x-1
                  hover:text-red-600
                "
              >
                {item}
              </span>
            </a>
          ))}
        </div>

        {/* CENTRO: Logo (Boxed Style) */}
        <div className="flex flex-col items-center leading-none scale-90 lg:scale-100 absolute left-[50%] translate-x-[-50%]">
          <a href="#" className="pointer-events-auto hover:text-black/40">
            <img src="https://www.pupilaaudiovisual.com.br/assets/C%C3%B3pia%20de%20novalogopupila1_(4).png" alt="" className="h-12"/>
          </a>
        </div>

        {/* DIREITO: Botões */}
        <div className="flex gap-3">
          <button className='"bg-white/10 backdrop-blur-md border border-white/40 px-1.5 py-1 text-[12px] font-bold tracking-tighter hover:bg-red-600 hover:text-black transition-all uppercase cursor-pointer pointer-events-auto'>
            Contato
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white/10 backdrop-blur-md border border-white/40 px-3 py-1 text-[12px] font-bold tracking-tighter hover:bg-red-600 hover:text-black transition-all uppercase cursor-pointer pointer-events-auto z-90"
          >
            {isMenuOpen ? 'Voltar' : 'Menu'}
          </button>
        </div>
      </nav>

      <MenuMobile isOpen={isMenuOpen} />
    </>
  );
}