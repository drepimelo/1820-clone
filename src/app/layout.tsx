import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importamos a fonte do Google
import './globals.css';
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./components/Hero";
import OverlaySection from "./components/OverlaySection";

// Configuramos a fonte
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter', // Criamos uma "variável" para o CSS
});

export const metadata: Metadata = {
  title: "1820 Productions Clone",
  description: "Recriando com Next.js e GSAP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      {/* Adicionamos a classe da fonte no body */}
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />

        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Hero />
        <OverlaySection title="Work"
          headline="We listen. We craft. We deliver."
          buttonText="Explore Our Work"
          buttonHref="#"
          backgroundImage="https://assets.teenvogue.com/photos/65b7dbffb239029c147012bf/16:9/w_2560%2Cc_limit/cropped-keke-tnv-wm-selects-2.jpg"
        />
        <OverlaySection title="Our Work"
          headline="Stylish production. Seamless execution."
          buttonText="Stuff we're really good at"
          buttonHref="#"
          backgroundImage="https://s.studiobinder.com/wp-content/uploads/2025/09/Ground-Level-Shot-Example-Ground-level-camera-angle-from-Kill-Bill-Vol-1.jpg"
        />
        <section className="h-screen bg-zinc-900" /> {/* Seção vazia para teste de scroll */}
      </body>
    </html>
  );
}