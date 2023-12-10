'use client';

import { LocalWrapper } from "./local-wrapper";
import React from "react";
import { usePathname } from 'next/navigation';

export default function GoteborgWrapper({ children }: { children: React.ReactNode; }) {
  const pathname = usePathname();

  return (
    <LocalWrapper
      title="Trollhättan"
      titleLink="/trollhattan"
      socials={[
        ["Facebook", "https://facebook.com/ingenillegaltrollhattan"],
        ["Instagram", "https://instagram.com/imaitrollhattan"],
        ["Twitter", "https://twitter.com/imaitrollhattan"],
      ]}
      links={[
        ["Om oss", "/trollhattan/om-oss"],
        ["Media", "/trollhattan/media"],
        ["Arbetsgrupper", "/trollhattan/arbetsgrupper"],
        ["Stöd oss", "/trollhattan/stod-oss"],
      ]}
      pathname={pathname}
    >
      {children}
    </LocalWrapper>
  );
}
