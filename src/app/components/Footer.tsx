'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // AJUSTE: A logo agora vem de baixo (y: 150) e para no centro (y: 0)
    // Isso garante que ela fique "abaixada" e centralizada ao final do scroll.
    gsap.fromTo(logoRef.current, 
      { y: 150 }, 
      {
        y: 0, 
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        }
      }
    );

    // Texto de fundo com movimento sutil para profundidade
    gsap.fromTo(textRef.current,
      { y: -40 },
      {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <footer 
      ref={containerRef} 
      className="sticky top-0 z-50 min-h-screen top-0 overflow-hidden w-full bg-red-500 flex flex-col items-center justify-center"
    >
      {/* Camada de Fundo: Texto PUPILA */}
      <div 
        ref={textRef} 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <h2 className="text-[28vw] font-black text-white/10 leading-none tracking-tighter uppercase">
          PUPILA
        </h2>
      </div>

      {/* Camada da Logo: Centralizada e com Parallax Suave */}
      <div 
        ref={logoRef} 
        className="relative z-10 w-72 md:w-[450px] transition-shadow duration-500"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="58.986 70.986 743.028 743.028"
          className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
        >
          {/* Elipse de fundo do SVG */}
          <ellipse fill="#fff" cx="430.5" cy="442.5" rx="371.514" ry="371.514"/>
          
          {/* Paths vermelhos da marca */}
          <path fill="#dc2626" d="M 596.958 492.663 C 581.803 500.277 566.903 507.861 552.009 515.459 C 542.211 520.457 532.492 525.615 522.61 530.44 C 513.534 534.872 503.768 536.675 494.019 533.906 C 482.563 530.651 475.662 522.236 473.073 510.775 C 471.709 504.744 471.046 498.428 471.028 492.238 C 470.872 440.527 470.787 388.815 471.059 337.105 C 471.118 325.874 473.873 315.135 482.673 306.962 C 487.667 302.324 493.677 300.139 500.282 299.659 C 512.175 298.794 522.431 303.551 532.533 309.149 C 540.732 313.694 549.32 317.529 557.679 321.791 C 576.991 331.637 596.264 341.559 615.561 351.436 C 634.662 361.212 653.808 370.902 672.861 380.77 C 681.092 385.033 689.309 389.371 697.22 394.189 C 704.446 398.59 709.917 404.621 711.784 413.349 C 713.234 420.131 711.215 425.982 707.45 431.382 C 703.301 437.332 697.493 441.299 691.092 444.535 C 678.674 450.813 666.302 457.183 653.911 463.515 C 642.771 469.207 631.624 474.884 620.495 480.596 C 612.722 484.585 604.974 488.623 596.958 492.663 Z" />
          <path fill="#dc2626" d="M 373.075 420.213 C 375.289 411.43 375.531 402.887 374.548 394.146 C 373.762 387.162 372.329 380.455 369.038 374.294 C 366.057 368.714 363.102 362.999 359.249 358.031 C 352.493 349.32 343.732 342.865 333.668 338.268 C 326.53 335.008 319.046 333.308 311.233 332.364 C 296.847 330.626 283.62 333.959 271.07 340.559 C 261.564 345.558 253.7 352.57 247.366 361.288 C 241.25 369.707 237.339 379.128 235.19 389.203 C 234.122 394.209 233.721 399.443 233.713 404.575 C 233.617 467.914 233.547 531.254 233.766 594.592 C 233.798 603.723 225.243 613.492 216.984 615.384 C 202.856 618.621 188.699 608.768 188.715 592.653 C 188.776 528.309 188.606 463.964 188.845 399.62 C 188.898 385.564 191.878 371.884 197.392 358.801 C 203.107 345.243 210.863 333.172 221.056 322.481 C 237.161 305.59 256.634 294.934 279.171 289.572 C 290.295 286.925 301.662 286.075 312.981 286.985 C 335.777 288.818 356.57 296.39 374.832 310.418 C 389.736 321.867 401.437 335.952 409.371 353.012 C 413.832 362.604 417.502 372.509 418.654 383.144 C 419.374 389.784 420.683 396.449 420.541 403.077 C 420.073 424.907 415.066 445.616 402.696 463.945 C 397.716 471.325 392.477 478.757 386.185 484.982 C 370.653 500.347 352.112 510.661 330.612 515.519 C 320.86 517.722 311.036 518.745 301.145 518.029 C 292.489 517.402 284.704 510.248 282.572 500.937 C 280.815 493.266 282.71 486.382 287.719 480.65 C 291.826 475.949 297.395 473.186 303.799 473.279 C 315.008 473.44 325.657 471.046 335.567 466.072 C 353.917 456.863 366.28 442.349 372.402 422.652 C 372.625 421.934 372.849 421.217 373.075 420.213 Z" />
        </svg>
      </div>

      {/* Rodapé institucional */}
      <div className="absolute bottom-12 w-full px-12 flex justify-between items-end text-white text-[10px] font-bold tracking-[0.2em] uppercase">
        <div className="flex flex-col gap-2">
          <span>Brasília, DF</span>
          <span>© {new Date().getFullYear()} Pupila Audiovisual</span>
        </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 text-[10px] font-bold tracking-widest uppercase ">
          {['Instagram', 'Vimeo', 'Linkedin', 'Facebook'].map(s => (
            <a key={s} href="#" className="hover:!opacity-50 hover:!text-red-100 transition-all duration-300 ">
              {s}
            </a>
          ))}
        </div>
      </div>
      </div>
    </footer>
  );
}