"use client";

import Content from "./content.mdx";
import { GlobalWrapper } from "@/components/global-wrapper";

export default function Page() {
  return (
    <GlobalWrapper
      appearance="dark"
      title="Ge ett bidrag"
      subtitle="Alla pengar som Ingen Människa är Illegal får in går oavkortat till stöd för gömda. Vi är ständigt i behov av ekonomiska bidrag för hyror, mat, kläder, spårvagnskort etc."
      bg="/imai_uppsala_demonstration_2011-03-20.jpg"
    >
      <Content />
    </GlobalWrapper>
  );
}
