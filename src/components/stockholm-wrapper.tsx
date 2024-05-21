"use client";

import { LocalWrapper } from "./local-wrapper";
import React from "react";
import { usePathname } from "next/navigation";

export default function StockholmWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <LocalWrapper
      title="Stockholm"
      titleLink="/stockholm"
      socials={[
        [
          "Facebook",
          "https://www.facebook.com/people/Ingen-M%C3%A4nniska-%C3%A4r-Illegal-Stockholm/100064250127146/",
        ],
        ["Twitter", "https://twitter.com/imaisthlm"],
        ["Instagram", "https://www.instagram.com/ingenillegal_sthlm/"],
      ]}
      links={[
        ["Stöd oss", "/stockholm/stod-oss"],
        ["Arbetsgrupper", "/stockholm/arbetsgrupper"],
        ["English", "/stockholm/english"],
      ]}
      pathname={pathname}
    >
      {children}
    </LocalWrapper>
  );
}
