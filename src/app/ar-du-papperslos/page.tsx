"use client";

import React from "react";
import Content from "./content.mdx";
import { GlobalWrapper } from "@/components/global-wrapper";

export default function Page() {
  return (
    <GlobalWrapper
      appearance="dark"
      title="Är du papperslös?"
      subtitle="Nätverket Ingen människa är illegal arbetar med att praktiskt stödja människor utan uppehållstillstånd."
      bg="/imai_banner_2.jpeg"
    >
      <Content />
    </GlobalWrapper>
  );
}
