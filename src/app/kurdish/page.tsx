"use client";
import Content from "./content.mdx";
import React from "react";
import { GlobalWrapper } from "@/components/global-wrapper";

export default function Page() {
  return (
    <GlobalWrapper
      appearance="light"
      title="  كوردی"
      subtitle="بَ خێربێي بۆ هاڵپَ ڕی ئَ اًَّ ی کَ ئَ ڵێي ، ه کَ ش ئازادٍ لَ"
      dir="rtl"
    >
      <Content />
    </GlobalWrapper>
  );
}
