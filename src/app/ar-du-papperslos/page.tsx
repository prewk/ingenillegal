'use client';

import { Header } from "@/components/header";
import Local from "@/components/local";
import { Footer } from "@/components/footer";
import React from "react";
import Hero from "@/components/hero";

export default function Page() {
  const links: [string, string, string][] = [
    ["Flyktinggruppernas riksråd", "www.farr.se", "https://www.farr.se"],
    [
      "Goda råd - Asylprocessen",
      "www.farr.se/sv/att-soeka-asyl/rad-till-asylsoekande",
      "https://www.farr.se/sv/att-soeka-asyl/rad-till-asylsoekande",
    ],
    [
      "Att söka asyl",
      "www.farr.se/sv/att-soeka-asyl",
      "https://www.farr.se/sv/att-soeka-asyl",
    ],

    [
      "Rätt till vård/tandvård",
      "www.farr.se/sv/att-soeka-asyl/vard-och-lakarintyg/1080-ratt-till-vard-for-asylsokande-och-papperslosa",
      "https://www.farr.se/sv/att-soeka-asyl/vard-och-lakarintyg/1080-ratt-till-vard-for-asylsokande-och-papperslosa",
    ],

    [
      "Tips till skolpersonal",
      "www.farr.se/sv/att-soeka-asyl/tips-till-skolpersonal",
      "https://www.farr.se/sv/att-soeka-asyl/tips-till-skolpersonal",
    ],

    [
      "Länkar till andra organisationer",
      "www.farr.se/sv/att-soeka-asyl/lankar",
      "https://www.farr.se/sv/att-soeka-asyl/lankar",
    ],

    ["Svenska Röda Korset", "www.redcross.se", "http://www.redcross.se"],

    [
      "Om rättigheter till skola och vård",
      "www.redcross.se/behover-du-var-hjalp/vard-och-behandling/roda-korsets-vardformedling",
      "https://www.redcross.se/behover-du-var-hjalp/vard-och-behandling/roda-korsets-vardformedling",
    ],

    [
      "Behandlingscenter för krigsskadade och torterade",
      "www.redcross.se/kontakt/behandlingscenter",
      "https://www.redcross.se/kontakt/behandlingscenter",
    ],

    [
      "Rådgivningsbyrån för asylsökande och flyktingar - Gratis juridisk rådgivning",
      "sweref.org/vilket-stod-kan-du-fa",
      "https://sweref.org/vilket-stod-kan-du-fa",
    ],
  ];

  return (
    <>
      <Header appearance="light" />
      <main>
        <Hero
          appearance="dark"
          title="Är du papperslös?"
          subtitle="Nätverket Ingen människa är illegal arbetar med att praktiskt stödja människor utan uppehållstillstånd."
          bg="/imai_banner_2.jpeg"
        />
        <section className="mx-auto my-24 max-w-[650px]">
          <p className="mb-4 text-xl font-light font-roboto">
            Vi har inga anställda eller särskild utbildning för detta. Vi tror
            på en värld utan nationsgränser, en värld där ingen människa är
            illegal. Tillsammans gör vi en annan värld möjlig.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            I länkarna längst ner på sidan hittar du information på olika språk
            om rättigheter till vård, skola, tandvård och boken Goda råd - om
            asylprocessen i Sverige. Samt kontaktuppgifter till gratis juridisk
            rådgivning.
          </p>

          <h2 className="text-2xl mt-10 mb-2 font-black">Kontakta oss</h2>
          <p className="text-xl font-light font-roboto">
            Ta kontakt med den grupp som är närmast dig. Kontaktuppgifter hittar
            du på lokalgruppens sida. Olika lokalgrupper kan hjälpa till med
            olika saker, se under lokalgruppernas egna flikar.{" "}
            <span className="italic">
              Skicka inga känsliga uppgifter (till exempel namn eller adresser)
              på mail och var försiktig även över telefon.
            </span>
          </p>
        </section>
        <section className="mx-auto max-w-[800px]">
          <Local appearance="transparent" />
        </section>
        <section className="mx-auto mt-16 mb-48 max-w-[650px]">
          <h2 className="text-2xl mt-10 mb-2 font-black">Länkar</h2>
          <ul className="text-xl font-light font-roboto">
            {links.map(([title, linkLabel, link], i) => (
              <React.Fragment key={i}>
                <li className="mt-4">{title}</li>
                <li>
                  <a
                    className="underline text-ocean-light hover:text-ocean-medium transition-colors"
                    href={link}
                  >
                    {linkLabel}
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
