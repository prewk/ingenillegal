"use client";
import Content from "./content.mdx";
import React from "react";
import { GlobalWrapper } from "@/components/global-wrapper";

export default function Page() {
  return (
    <GlobalWrapper
      appearance="light"
      title="Türkçe"
      subtitle="Herkesin, dünyayı gezip ve istediği yerde yaşayabileceği özgürlüğe sahip olduğuna inanan bir websitesine hoşgeldiniz."
    >
      <Content />
    </GlobalWrapper>
  );
}
