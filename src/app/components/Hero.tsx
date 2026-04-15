'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef(null); // Criamos uma "âncora" para o GSAP saber onde olhar

  useGSAP(() => {
    // A mágica acontece aqui!
    // "gsap.from" diz: comece desse estado e vá para o estado natural
    gsap.from(".hero-title", { 
      y: 100,          // Começa 100 pixels abaixo
      opacity: 0,      // Começa invisível
      duration: 1.5,   // Leva 1.5 segundos
      ease: "power4.out" // O tipo de "curva" do movimento (suave no final)
    });
  }, { scope: container }); // O scope garante que o GSAP só mexa no que está dentro deste componente

  return (
    
    <section ref={container} className="relative top-0 z-50 h-screen flex items-center justify-center bg-black overflow-hidden">
      <h1 className="hero-title text-7xl font-bold uppercase tracking-tighter z-1">
        Pupila Audiovisual
      </h1>
      <iframe
        src="https://player.vimeo.com/video/825078489?h=dfffef1b79?h=fa32dddc47&autoplay=1&muted=1&loop=1&background=1"
        allow="autoplay; fullscreen; picture-in-picture allowfullscreen"
        className ="absolute top-0 left-0 w-lvw h-lvh object-cover opacity-70 z-0 border-0 scale-175"
  ></iframe>
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40550ab9-0dde-4376-ae73-77355bb45d73/d37pwfa-82dd8ce8-a772-4e1d-9f03-e355a2aa1722.jpg/v1/fill/w_1024,h_768,q_75,strp/film_texture___grain_explosion_by_stephanepellennec_d37pwfa-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6Ii9mLzQwNTUwYWI5LTBkZGUtNDM3Ni1hZTczLTc3MzU1YmI0NWQ3My9kMzdwd2ZhLTgyZGQ4Y2U4LWE3NzItNGUxZC05ZjAzLWUzNTVhMmFhMTcyMi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.aSxRQd9L7FH8U94gUiuDk8_e8_keT49wAENCcODKIDw')] bg-repeat"></div>
    </section>
  );
}