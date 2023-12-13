"use client";
import Content from "./content.mdx";
import React from "react";
import { GlobalWrapper } from "@/components/global-wrapper";

export default function Page() {
  return (
    <GlobalWrapper
      appearance="light"
      title="Русский"
      subtitle="Добро пожаловать на сайт для тех, кто выступает за свободу передвижения и за мир без виз и границ."
    >
      <Content />
    </GlobalWrapper>
  );
}
