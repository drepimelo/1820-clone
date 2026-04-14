import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importamos a fonte do Google
import './globals.css';
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./components/Hero";
import OverlaySection from "./components/OverlaySection";
import Footer from "./components/Footer";

// Configuramos a fonte
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter', // Criamos uma "variável" para o CSS
});

export const metadata: Metadata = {
  title: "Pupila Audiovisual",
  description: "Empresa junior de audiovisual da Universidade de Brasília. Transformamos o conteúdo da sua empresa em uma obra cinematográfica.",
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

        <Footer />
      </body>
    </html>
  );
}