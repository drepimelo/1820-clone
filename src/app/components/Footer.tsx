'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface FooterProps {
  onInView: (inView: boolean) => void;
}

export default function Footer({ onInView }: FooterProps) {
  const container = useRef(null);

  // Intersection Observer para detectar visibilidade
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Ativa quando 10% do footer aparecer
    );

    if (container.current) {
      observer.observe(container.current);
    }

    return () => observer.disconnect();
  }, [onInView]);

  useGSAP(() => {
    gsap.from(container.current, {
      duration: 1,
      opacity: 0,
      y: 50,
    });
  }, []);

  return (
    <footer 
      ref={container} 
      className="bg-zinc-900 text-white py-10 h-128 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Pupila Audiovisual. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}