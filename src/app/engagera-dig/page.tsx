"use client";

import React from "react";
import Content from "./content.mdx";
import { GlobalWrapper } from "@/components/global-wrapper";

export default function Page() {
  return (
    <GlobalWrapper
      appearance="dark"
      title="Engagera dig"
      subtitle="IMäI består av sina medlemmars engagemang. Det finns många sätt att engagera sig, och här listar vi några."
      bg="/imai_banner.jpg"
    >
      <Content />
    </GlobalWrapper>
  );
}
