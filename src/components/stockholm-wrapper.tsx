'use client';

import { LocalWrapper } from "./local-wrapper";
import React from "react";
import { usePathname } from 'next/navigation';

export default function StockholmWrapper({ children }: { children: React.ReactNode; }) {
  const pathname = usePathname();

  return (
    <LocalWrapper
      title="Stockholm"
      titleLink="/stockholm"
      socials={[
        ["Facebook", "https://www.facebook.com/Ingen-M%C3%A4nniska-%C3%A4r-Illegal-Stockholm-124647770935985/"],
        ["Twitter", "https://twitter.com/imaisthlm"],
      ]}
      links={[
        ["Stöd oss", "/stockholm/stod-oss"],
        ["Arbetsgrupper", "/stockholm/arbetsgrupper"],
        ["Media", "/stockholm/media"],
        ["English", "/stockholm/english"],
      ]}
      pathname={pathname}
    >
      {children}
    </LocalWrapper>
  );
}
