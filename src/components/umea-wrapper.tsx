'use client';

import { LocalWrapper } from "./local-wrapper";
import React from "react";
import { usePathname } from 'next/navigation';

export default function GoteborgWrapper({ children }: { children: React.ReactNode; }) {
  const pathname = usePathname();

  return (
    <LocalWrapper
      title="Umeå"
      titleLink="/umea"
      socials={[
        ["Facebook", "https://www.facebook.com/ida.jonsson.9480/"],
      ]}
      links={[
        ["Stöd oss", "/umea/stod-oss"],
        ["Om oss", "/umea/om-oss"],
        ["English", "/umea/english"],
      ]}
      pathname={pathname}
    >
      {children}
    </LocalWrapper>
  );
}
