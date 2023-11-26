import { LocalWrapper } from "./local-wrapper";
import React from "react";

export default function GoteborgWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocalWrapper
      title="Göteborg"
      titleLink="/goteborg"
      socials={[
        ["Facebook", "https://www.facebook.com/imaiGoteborg"],
        ["Twitter", "https://twitter.com/ingenillegalgbg"],
      ]}
      links={[
        ["Stöd oss", "/goteborg/stod-oss"],
        ["Arbetsgrupper", "/goteborg/arbetsgrupper"],
        ["Stadgar", "/goteborg/stadgar"],
        ["Media", "/goteborg/media"],
        ["English", "/goteborg/english"],
      ]}
    >
      {children}
    </LocalWrapper>
  );
}
