import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importamos a fonte do Google
import './globals.css';
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor"; // Importe o novo componente

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
        <Cursor />
        <Footer />
      </body>
    </html>
  );
}