'use client';

import { LocalWrapper } from "./local-wrapper";
import React from "react";
import { usePathname } from 'next/navigation';

export default function OstersundWrapper({children}: { children: React.ReactNode; }) {
  const pathname = usePathname();

  return (
    <LocalWrapper
      title="Östersund"
      titleLink="/ostersund"
      socials={[
        ["Facebook", "https://www.facebook.com/imaiostersund/"],
        ["Instagram", "https://www.instagram.com/imaiostersund"],
      ]}
      links={[
        ["Stöd oss", "/ostersund/stod-oss"],
        ["English", "/ostersund/english"],
      ]}
      pathname={pathname}
    >
      {children}
    </LocalWrapper>
  );
}
