"use client";

import Local from "@/components/local";
import React from "react";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
import { Main } from "@/components/main";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header appearance="dark" />
      <Hero
        appearance="light"
        title="Alla människor har rätt att röra sig fritt"
        subtitle="Vi kräver permanent uppehållstillstånd åt alla som vill stanna i Sverige. För en värld utan nationsgränser, en värld där ingen människa är illegal."
      />
      <Main>
        <Local appearance="filled" />
      </Main>
      <Footer />
    </>
  );
}
