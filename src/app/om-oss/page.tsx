"use client";

import React from "react";
import { GlobalWrapper } from "@/components/global-wrapper";
import Content from "./content.mdx";

export default function Page() {
  return (
    <GlobalWrapper
      appearance="light"
      title="Om oss"
      subtitle="Nätverket Ingen människa är illegal arbetar med att praktiskt stödja personer som fått avslag på sin asylansökan hos Migrationsverket."
      bg="/imai_banner_2.jpeg"
    >
      <Content />
    </GlobalWrapper>
  );
}
