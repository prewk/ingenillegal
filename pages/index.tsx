import Link from "next/link";
import React, { useState } from "react";
import Local from "../components/local";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Modal } from "../components/modal";

export default function Home() {
  const [menuState, setMenuState] = useState<"none" | "menu" | "language">(
    "none"
  );

  const chapters: [string, string][] = [
    ["Göteborg", "/goteborg"],
    ["Östersund", "/ostersund"],
    ["Stockholm", "/stockholm"],
    ["Trollhättan", "/trollhattan"],
    ["Umeå", "/umea"],
    ["Uppsala", "/uppsala"],
  ];

  const languages: [string, string][] = [
    ["English", "/english"],
    ["Bosanski Hrvatski Srpski", "/bosanski-hrvatski-srpski"],
    ["Español", "/spanish"],
    ["Deutsch", "/german"],
    ["ትግርኛ", "/tigrigna"],
    ["كوردی", "/kurdish"],
    ["فارسی", "/persian"],
    ["Русский", "/russian"],
    ["Türkçe", "/turkish"],
    ["Français", "/french"],
  ];

  return (
    <>
      <Header
        appearance="light"
        onClickMenu={() => setMenuState("menu")}
        onClickLanguage={() => setMenuState("language")}
      />
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
      <Modal
        visible={menuState === "menu"}
        onClose={() => setMenuState("none")}
      >
        <ul className="font-roboto text-2xl font-bold">
          <li>
            <Link
              className="text-white border border-transparent inline-block my-1.5 py-0.5 border-b border-b-light/0 hover:border-b-light transition-all duration-300"
              href="/ar-du-papperslos"
            >
              Är du papperslös?
            </Link>
          </li>
          <li>
            <Link
              className="text-white border border-transparent inline-block my-1.5 py-0.5 border-b border-b-light/0 hover:border-b-light transition-all duration-300"
              href="/engagera-dig"
            >
              Engagera dig
            </Link>
          </li>
          <li>
            <Link
              className="text-white border border-transparent inline-block my-1.5 py-0.5 border-b border-b-light/0 hover:border-b-light transition-all duration-300"
              href="/ge-ett-bidrag"
            >
              Ge ett bidrag
            </Link>
          </li>
          <li>
            <Link
              className="text-white border border-transparent inline-block my-1.5 py-0.5 border-b border-b-light/0 hover:border-b-light transition-all duration-300"
              href="/om-oss"
            >
              Om oss
            </Link>
          </li>
        </ul>
        <ul className="font-mono">
          {chapters.map(([label, link]) => (
            <li key={label}>
              <Link
                className="text-white border border-transparent inline-block my-0.5 py-0.5 border-b border-b-light/0 hover:border-b-light transition-all duration-300"
                href={link}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Modal>
      <Modal
        visible={menuState === "language"}
        onClose={() => setMenuState("none")}
      >
        <ul className="font-mono">
          {languages.map(([label, link]) => (
            <li key={label}>
              <Link
                className="text-white border border-transparent inline-block my-0.5 py-0.5 border-b border-b-light/0 hover:border-b-light transition-all duration-300"
                href={link}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
}
