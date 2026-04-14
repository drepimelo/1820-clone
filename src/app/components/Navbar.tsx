'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import MenuMobile from './MenuMobile';

export default function Navbar({hide}: { hide: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Valores base para a posição e raio
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);

  // 2. Configuração de "Mola" (Spring) para fluidez máxima
  const springConfig = { damping: 20, stiffness: 200 };
  const maskX = useSpring(mouseX, springConfig);
  const maskY = useSpring(mouseY, springConfig);
  const maskRadius = useSpring(radius, springConfig);

  // 3. A MÁGICA: useMotionTemplate resolve o erro de interpolação do clipPath
  const clipPath = useMotionTemplate`circle(${maskRadius}px at ${maskX}px ${maskY}px)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => radius.set(50); // Expande o círculo
  const handleMouseLeave = () => radius.set(0);   // Retrai o círculo

  // Componente interno para renderizar os paths do seu SVG original
  const PupilaSVG = ({ color }: { color: string }) => (
    <svg 
      viewBox="0 0 803 233" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full pointer-events-none"
      style={{ shapeRendering: 'geometricPrecision' }}
    >
      <g fill={color}>
        <path d="M 477.5,5.5 C 482.808,4.74349 487.641,5.74349 492,8.5C 492.667,9.83333 493.333,11.1667 494,12.5C 494.667,65.1667 494.667,117.833 494,170.5C 489.872,177.489 484.039,179.322 476.5,176C 474.622,174.457 473.122,172.624 472,170.5C 471.333,117.5 471.333,64.5 472,11.5C 473.36,8.97739 475.193,6.97739 477.5,5.5 Z"/>
        <path d="M 669.5,56.5 C 674.726,56.7117 679.726,57.8784 684.5,60C 713.343,75.2552 742.343,90.2552 771.5,105C 779.815,110.447 781.648,117.613 777,126.5C 774.257,128.788 771.423,130.955 768.5,133C 738.833,148 709.167,163 679.5,178C 667.459,181.564 659.625,177.398 656,165.5C 655.333,133.833 655.333,102.167 656,70.5C 657.356,62.6462 661.856,57.9795 669.5,56.5 Z"/>
        <path d="M 74.5,57.5 C 104.863,55.4219 126.363,68.0886 139,95.5C 148.383,126.019 140.216,150.519 114.5,169C 102.665,176.369 89.9979,178.702 76.5,176C 70.7687,170.932 69.602,165.098 73,158.5C 74.7309,156.383 76.8976,154.883 79.5,154C 107.347,152.133 120.18,137.3 118,109.5C 109.748,86.1228 93.5817,77.6228 69.5,84C 56.2062,90.3033 48.7062,100.803 47,115.5C 46.6667,150.5 46.3333,185.5 46,220.5C 42.5356,227.198 37.0356,229.365 29.5,227C 27,225.833 25.1667,224 24,221.5C 23.0293,181.462 23.3627,141.462 25,101.5C 32.9332,77.0603 49.4332,62.3937 74.5,57.5 Z"/>
        <path d="M 340.5,57.5 C 369.847,55.4154 391.014,67.4154 404,93.5C 414.773,124.601 406.939,149.768 380.5,169C 368.665,176.369 355.998,178.702 342.5,176C 336.785,170.987 335.618,165.154 339,158.5C 340.731,156.383 342.898,154.883 345.5,154C 373.347,152.133 386.18,137.3 384,109.5C 375.748,86.1228 359.582,77.6228 335.5,84C 322.537,90.0758 315.037,100.242 313,114.5C 312.667,149.833 312.333,185.167 312,220.5C 308.536,227.198 303.036,229.365 295.5,227C 291.479,225.132 289.313,221.965 289,217.5C 288.333,183.5 288.333,149.5 289,115.5C 292.277,83.7284 309.443,64.3951 340.5,57.5 Z"/>
        <path d="M 560.5,57.5 C 590.395,55.5224 611.895,67.8557 625,94.5C 626.961,99.6767 628.294,105.01 629,110.5C 629.667,130.833 629.667,151.167 629,171.5C 625.04,180.746 618.54,182.912 609.5,178C 607.959,176.421 606.792,174.587 606,172.5C 605.944,150.791 605.277,129.124 604,107.5C 596.963,88.8058 583.463,80.3058 563.5,82C 540.483,88.686 530.983,103.853 535,127.5C 542.242,145.716 555.742,154.882 575.5,155C 582.555,161.05 583.222,167.716 577.5,175C 550.226,179.615 529.726,169.782 516,145.5C 503.389,115.618 509.223,90.1178 533.5,69C 541.869,63.4764 550.869,59.643 560.5,57.5 Z"/>
        <path d="M 162.5,58.5 C 170.271,57.2946 175.438,60.2946 178,67.5C 178.333,85.1667 178.667,102.833 179,120.5C 185.71,143.601 200.877,153.101 224.5,149C 238.73,144.104 247.23,134.271 250,119.5C 250.333,101.833 250.667,84.1667 251,66.5C 255.84,57.9696 262.507,56.303 271,61.5C 272.439,63.2746 273.439,65.2746 274,67.5C 274.667,85.5 274.667,103.5 274,121.5C 267.823,154.504 247.989,172.171 214.5,174.5C 181.163,172.586 161.329,155.253 155,122.5C 154.333,103.833 154.333,85.1667 155,66.5C 156.353,62.6499 158.853,59.9832 162.5,58.5 Z"/>
        <path d="M 433.5,58.5 C 440.034,57.5023 444.868,59.8356 448,65.5C 448.667,100.5 448.667,135.5 448,170.5C 443.872,177.489 438.039,179.322 430.5,176C 428.622,174.457 427.122,172.624 426,170.5C 425.333,135.5 425.333,100.5 426,65.5C 427.767,62.228 430.267,59.8947 433.5,58.5 Z"/>
      </g>
    </svg>
  );

  return (
    <>
      <motion.nav 
        // Animação de saída da Navbar
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: hide ? -100 : 0, 
          opacity: hide ? 0 : 1 
        }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full z-[999] flex justify-between items-start px-4 py-4 text-white pointer-events-none mt-0"
      >      
        <nav className="fixed top-0 left-0 w-full z-[999] flex justify-between items-start px-4 py-4 text-white pointer-events-none mt-0">
          
          {/* LADO ESQUERDO: Menu Vertical */}
          <div className="flex flex-col gap-1 text-[12px] font-bold tracking-tight uppercase pointer-events-auto">
            {['Portfolio', 'Trabalhos', 'Sobre', 'Bastidores'].map((item) => (
              <a key={item} href="#" className="group flex items-center gap-2 w-fit">
                <span className="block h-[1px] bg-red-600 w-0 transition-all duration-500 group-hover:w-4" />
                <span className="transition-all duration-500 group-hover:translate-x-1 hover:text-red-600">{item}</span>
              </a>
            ))}
          </div>

          {/* CENTRO: Logo com Efeito Interno Circular */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-4 pointer-events-auto cursor-pointer flex items-center justify-center"
            style={{ width: '165px', height: '48px' }} // Proporção exata do SVG Pupila
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Logo Base (Branca) */}
            <div className="absolute inset-0">
              <PupilaSVG color="white" />
            </div>

            {/* Logo Revelada (Vermelha) */}
            <motion.div 
              className="absolute inset-0"
              style={{ clipPath }} // Referência dinâmica via useMotionTemplate
            >
              <PupilaSVG color="#dc2626" />
            </motion.div>
          </div>

          {/* DIREITO: Botões */}
          <div className="flex gap-3">
            <button className="bg-white/10 backdrop-blur-md border border-white/40 px-1.5 py-1 text-[12px] font-bold tracking-tighter hover:bg-red-600 hover:text-black transition-all duration-300 uppercase pointer-events-auto cursor-pointer">
              Contato
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white/10 backdrop-blur-md border border-white/40 px-3 py-1 text-[12px] font-bold tracking-tighter hover:bg-red-600 hover:text-black transition-all duration-300 uppercase pointer-events-auto z-90 cursor-pointer"
            >
              {isMenuOpen ? 'Voltar' : 'Menu'}
            </button>
          </div>
        </nav>

        <MenuMobile isOpen={isMenuOpen} />
      </motion.nav>
    </>
  );
}