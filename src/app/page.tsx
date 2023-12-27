"use client";

import Local from "@/components/local";
import React from "react";
import { GlobalWrapper } from "@/components/global-wrapper";

export default function Home() {
  return (
    <GlobalWrapper
      appearance="light"
      title="Alla människor har rätt att röra sig fritt"
      subtitle="Vi kräver permanent uppehållstillstånd åt alla som vill stanna i Sverige. För en värld utan nationsgränser, en värld där ingen människa är illegal."
    >
      <Local appearance="filled" />
    </GlobalWrapper>
  );
}
