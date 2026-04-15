'use client';

import { useState } from 'react';

type OverlaySectionProps = {
  title: string
  headline: string
  buttonText: string
  buttonHref: string
  backgroundImage: string
  id: string
  text_content: string
}

export default function OverlaySection({
  title,
  headline,
  buttonText,
  buttonHref,
  backgroundImage,
  id,
  text_content
}: OverlaySectionProps) {
  return (
    <section className="sticky min-h-screen top-0 overflow-hidden uppercase font-bold tracking-tight" id={id}>
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay escuro opcional */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen p-10 tracking-tighter">

        {/* Título topo */}
        <h2 className="text-sm uppercase left-[95%] translate-x-[-5%] absolute top-20 ">
          {title}
        </h2>

        {/* Centro */}
        <div className="flex flex-col items-center text-center gap-6 top-[50%] translate-y-[-50%] absolute left-[50%] translate-x-[-50%]">
          <h3 className="text-3xl font-bold max-w-xl">
            {headline}
          </h3>

          <p className='text-xl font-light max-w-xl '>
            {text_content}
          </p>

          <a
            href={buttonHref}
            className="border border-white text-xs px-2 py-1 border-t-0 border-b-0 hover:bg-white hover:text-red-600! transition-all duration-200 uppercase hover:border-0 tracking-normal"
          >
            {buttonText}
          </a>
        </div>

        <div /> {/* espaço inferior */}
      </div>
    </section>
  )
}