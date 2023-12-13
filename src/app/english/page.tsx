"use client";

import React from "react";
import { GlobalWrapper } from "@/components/global-wrapper";
import Content from "./content.mdx";

export default function Page() {
  return (
    <GlobalWrapper
      appearance="light"
      title="English"
      subtitle="Welcome to a website for those who believe that all peoples should be free to roam the world and live wherever they please."
    >
      <Content />
    </GlobalWrapper>
  );
}
