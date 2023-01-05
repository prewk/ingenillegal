import React from "react";
import Local from "../components/local";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Header appearance="dark" />
      <main>
        <Hero
          appearance="light"
          title="Alla människor har rätt att röra sig fritt"
          subtitle="Vi kräver permanent uppehållstillstånd åt alla som vill stanna i Sverige. För en värld utan nationsgränser, en värld där ingen människa är illegal."
        />
        <Local appearance="filled" />
      </main>
      <Footer />
    </>
  );
}
