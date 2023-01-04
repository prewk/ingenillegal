import React from "react";
import Local from "../components/local";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <>
      <Header appearance="light" />
      <main>
        <section className="h-[80vh] flex flex-col justify-center">
          <h1 className="font-roboto text-3xl md:text-5xl font-black text-center mx-auto max-w-[20ch] mb-8">
            Alla människor har rätt att röra sig fritt
          </h1>
          <p className="font-mono text-xl md:text-2xl text-center mx-auto max-w-[56ch]">
            Vi kräver permanent uppehållstillstånd åt alla som vill stanna i
            Sverige. För en värld utan nationsgränser, en värld där ingen
            människa är illegal.
          </p>
        </section>
        <Local />
      </main>
      <Footer />
    </>
  );
}
