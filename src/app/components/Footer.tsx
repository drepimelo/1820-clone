'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Footer() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(container.current, {
      duration: 1,
      opacity: 0,
      y: 50,
    });
  }, []);

  return (
    <footer ref={container} className="bg-zinc-900 text-white py-10 h-128 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Pupila Audiovisual. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}