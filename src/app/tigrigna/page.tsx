"use client";
import Content from "./content.mdx";
import React from "react";
import { GlobalWrapper } from "@/components/global-wrapper";

export default function Page() {
  return (
    <GlobalWrapper appearance="light" title="ትግርኛ" dir="rtl">
      <Content />
    </GlobalWrapper>
  );
}
