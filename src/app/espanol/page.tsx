"use client";
import Content from "./content.mdx";
import React from "react";
import { GlobalWrapper } from "@/components/global-wrapper";

export default function Page() {
  return (
    <GlobalWrapper
      appearance="light"
      title="Español"
      subtitle="Bienvenidos a la página para nosotros que decimos que toda persona tiene derecho a circular y establecerse libremente en cualquier parte del mundo."
    >
      <Content />
    </GlobalWrapper>
  );
}
