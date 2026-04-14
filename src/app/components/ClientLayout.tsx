'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isFooterInView, setIsFooterInView] = useState(false);

  return (
    <>
      <Navbar hide={isFooterInView} />
      <main>{children}</main>
      <Footer onInView={setIsFooterInView} />
    </>
  );
}