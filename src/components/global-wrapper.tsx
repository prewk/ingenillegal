'use client';

import React from 'react';
import { Header } from './header';
import Hero from './hero';

export function GlobalWrapper({
  appearance,
  title,
  subtitle,
  bg,
  children
}: {
  appearance: 'dark' | 'light';
  title: string;
  subtitle: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header appearance="light" />
      <Hero
        appearance={ appearance }
        title={ title }
        subtitle={ subtitle }
        bg={ bg }
      />
      <section className="mx-auto my-24 max-w-[650px]">
        { children }
      </section>
    </>
  )
}
