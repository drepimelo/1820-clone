'use client';

import { useState } from 'react';

type OverlaySectionProps = {
  title: string
  headline: string
  buttonText: string
  buttonHref: string
  backgroundImage: string
}

export default function OverlaySection({
  title,
  headline,
  buttonText,
  buttonHref,
  backgroundImage,
}: OverlaySectionProps) {
  return (
    <section className="relative min-h-screen sticky top-0 overflow-hidden uppercase font-bold tracking-tight">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay escuro opcional */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen p-10 text-white tracking-tighter">

        {/* Título topo */}
        <h2 className="text-sm uppercase left-[95%] translate-x-[-5%] absolute top-20">
          {title}
        </h2>

        {/* Centro */}
        <div className="flex flex-col items-center text-center gap-6 top-[50%] translate-y-[-50%] absolute left-[50%] translate-x-[-50%]">
          <h3 className="text-5xl font-bold max-w-xl">
            {headline}
          </h3>

          <a
            href={buttonHref}
            className="border border-white text-xs px-2 py-1 border-t-0 border-b-0 hover:bg-white hover:text-black transition-all uppercase hover:border-0"
          >
            {buttonText}
          </a>
        </div>

        <div /> {/* espaço inferior */}
      </div>
    </section>
  )
}