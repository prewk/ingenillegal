"use client";
import Content from "./content.mdx";
import React from "react";
import { GlobalWrapper } from "@/components/global-wrapper";

export default function Page() {
  return (
    <GlobalWrapper
      appearance="light"
      title="Bosanski Hrvatski Srpski"
      subtitle="Dobro došli na stranicu organizacije ”Niko/nitko nije ilegalan” (Ingen människa är illegal). Ova stranica je za nas koji smo ubijeđeni da svi ljudi imaju pravo na slobodu kretanja po svijetu kao i pravo da žive gdje god žele na ovoj planeti."
    >
      <Content />
    </GlobalWrapper>
  );
}
