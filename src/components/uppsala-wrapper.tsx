'use client';

import { LocalWrapper } from "./local-wrapper";
import React from "react";
import { usePathname } from 'next/navigation';

export default function UppsalaWrapper({children}: { children: React.ReactNode; }) {
  const pathname = usePathname();

  return (
    <LocalWrapper
      title="Uppsala"
      titleLink="/uppsala"
      socials={[
        ["Facebook", "https://www.facebook.com/ingenillegal.uppsala"],
      ]}
      links={[
        ["Stöd oss", "/uppsala/stod-oss"],
        ["Engagera dig", "/uppsala/engagera-dig"],
        ["Om oss", "/uppsala/om-oss"],
        ["English", "/uppsala/english"],
      ]}
      pathname={pathname}
    >
      {children}
    </LocalWrapper>
  );
}
