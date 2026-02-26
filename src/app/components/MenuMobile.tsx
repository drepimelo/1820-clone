'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MenuLink from './MenuLink';

export default function MenuMobile({ isOpen }: { isOpen: boolean }) {
  const menuRef = useRef(null);

  // 1. Escondemos o menu assim que o site carrega
  useGSAP(() => {
    gsap.set(menuRef.current, { xPercent: 100 });
  }, []);

  // 2. Controlamos a entrada e saída
useGSAP(() => {
  const mm = gsap.matchMedia()

  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      const isDesktop = context.conditions?.isDesktop ?? false

      if (isOpen) {
        gsap.to(menuRef.current, {
          xPercent: isDesktop ? -20 : 0,
          duration: 0.8,
          ease: "power4.inOut",
        })

        gsap.fromTo(
          ".menu-link",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.4,
          }
        )
      } else {
        gsap.to(menuRef.current, {
          xPercent: 100,
          duration: 0.8,
          ease: "power4.inOut",
        })
      }
    }
  )

  return () => mm.revert()
}, [isOpen])


  return (
    <div 
      ref={menuRef}
      className={`
        fixed 
        top-0 /* Ajuste aqui para ficar abaixo da sua logo/botoes */
        right-[-125] 
        h-[100vh] /* Ocupa o resto da tela */
        w-70% md:w-[550px] 
        flex flex-col justify-between p-12
        
        /* ESTILO VIDRO REAL */
        bg-black/40          /* Fundo escuro semi-transparente */
        backdrop-blur-xl     /* O desfoque */
        -webkit-backdrop-blur-xl /* Suporte para Safari */
        
        text-white 
        z-[80]               /* Menor que o z-[70] da Navbar */
        "
      `}
    >
      {/* Links do Menu */}
      <div className="flex flex-col items-start mt-[40px]">
        {['Home', 'Work', 'Services', 'About', 'BTS', 'Contact'].map((item) => (
          <div key={item} className="menu-link opacity-0 w-full ">
            <MenuLink title={item} />
          </div>
        ))}
      </div>

      {/* Rodapé do Menu */}
      <div className="flex flex-col gap-4">
        <span className="text-[10px] tracking-widest uppercase opacity-40">Socials:</span>
        <div className="flex gap-4 text-[10px] font-bold tracking-widest uppercase">
          {['Instagram', 'Vimeo', 'Linkedin', 'Facebook'].map(s => (
            <a key={s} href="#" className="hover:opacity-50 transition-opacity">
              {s}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}