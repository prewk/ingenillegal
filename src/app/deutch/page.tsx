"use client";
import Content from "./content.mdx";
import React from "react";
import { GlobalWrapper } from "@/components/global-wrapper";

export default function Page() {
  return (
    <GlobalWrapper
      appearance="light"
      title="Deutsch"
      subtitle="Willkommen auf einer Website für diejenigen, die glauben, dass alle Menschen frei sein sollten, um in der Welt herumzuwandern und dort zu leben, wo immer sie wünschen."
    >
      <Content />
    </GlobalWrapper>
  );
}
