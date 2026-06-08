"use client";

import { LocalWrapper } from "./local-wrapper";
import React from "react";
import { usePathname } from "next/navigation";

export default function GoteborgWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <LocalWrapper
      title="Göteborg"
      titleLink="/goteborg"
      socials={[
        ["Facebook", "https://www.facebook.com/imaiGoteborg"],
        ["Instagram", "https://www.instagram.com/ingenillegal_gbg"],
      ]}
      links={[
        ["Stöd oss", "/goteborg/stod-oss"],
        ["Arbetsgrupper", "/goteborg/arbetsgrupper"],
        ["Info för papperslösa", "/goteborg/info-for-papperslosa"],
        ["Flyktingbarnmottagning", "/goteborg/flyktingbarnmottagning"],
        ["HBTQI-flyktingar", "/goteborg/hbtqi-flyktingar"],
        ["Stadgar", "/goteborg/stadgar"],
        ["English", "/goteborg/english"],
      ]}
      pathname={pathname}
    >
      {children}
    </LocalWrapper>
  );
}
