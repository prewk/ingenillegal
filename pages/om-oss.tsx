import { Header } from "../components/header";
import React from "react";
import Hero from "../components/hero";
import Image from "next/image";
import ballong from "../public/imai_ballong.jpg";
import { Footer } from "../components/footer";

export default function OmOss() {
  return (
    <>
      <Header appearance="dark" />
      <main>
        <Hero
          appearance="light"
          title="Om oss"
          subtitle="Nätverket Ingen människa är illegal arbetar med att praktiskt stödja personer som fått avslag på sin asylansökan hos Migrationsverket."
        />
        <section className="mx-auto mb-24 px-4 md:max-w-[75%] lg:max-w-[720px] lg:px-16">
          <Image src={ballong} alt="Ballong med texten 'No one illegal'" />
          <p className="my-4 text-xl font-light font-roboto">
            Ingen illegal är en ideell organisation och har inga anställda.
            Nätverket består av personer med olika yrken, erfarenheter och
            kunskaper.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            Vi kräver permanent uppehållstillstånd åt alla som befinner sig i
            Sverige och vill stanna kvar här. Vi tror på en värld utan
            nationsgränser, en värld där ingen människa är illegal.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            Vi arbetar politiskt med att lyfta frågan om asylsökandes och
            papperslösas rättigheter. (Läs mer om begreppet papperslös,{" "}
            <a
              href="https://www.farr.se/sv/vad-vill-farr/sociala-rattigheter#papperslos"
              className="text-ocean-light hover:text-ocean-medium transition-colors underline"
            >
              https://www.farr.se/sv/vad-vill-farr/sociala-rattigheter#papperslos
            </a>
            ).{" "}
          </p>
          <ul className="list-disc ml-8 text-xl font-light font-roboto">
            <li>
              Vi påverkar politiska beslut, bildar opinion och arbetar
              utåtriktat för en värld utan gränser.
            </li>
            <li>
              Vi föreläser på skolor och andra platser om papperslösas situation
              och om vårt arbete.
            </li>
            <li>
              Vi organiserar manifestationer och är med i kampanjer och nätverk
              som arbetar för papperslösas rättigheter.
            </li>
          </ul>
          <p className="my-4 text-xl font-light font-roboto">
            Vi arbetar praktiskt med att stödja människor utan
            uppehållstillstånd.
          </p>
          <ul className="list-disc ml-8 text-xl font-light font-roboto">
            <li>
              Vi stödjer med allt från boende och mat till kollektivtrafik-kort
              och kläder.
            </li>
            <li>
              Vi följer med till läkare, ordnar skolplatser och bistår med
              juridisk hjälp och information om svenska myndigheter. Ibland
              behöver vi bara finnas där som medmänniska och stöd.
            </li>
            <li>
              Vi hämtar mat och bröd som blivit över från affärer och bagerier
              och distribuerar.
            </li>
            <li>
              Vi anordnar aktiviteter och för barn, för att de ska få vara just
              barn.
            </li>
            <li>
              Vi agerar genom direkt aktion för att förhindra att människor
              t.ex. deporteras mot sin vilja.
            </li>
          </ul>
          <p className="my-4 text-xl font-light font-roboto">
            För att kunna bedriva verksamheten anordnar vi stödspelningar och
            festivaler för att samla in pengar. T.ex festivalerna{" "}
            <a
              className="text-ocean-light hover:text-ocean-medium underline transition-colors"
              href="http://punkillegal.com/"
            >
              Punk Illegal
            </a>
            , Festival Illegal och fester med olika teman såsom electro-illegal,
            bugg-illegal, country-illegal osv. Alla pengar som kommer in via
            arrangemang eller insamlingar och autogiro går oavkortat till
            papperslösa.
          </p>

          <h2 className="text-2xl mt-10 mb-2 font-black">
            Verksamhet utan hierarkier
          </h2>
          <p className="my-4 text-xl font-light font-roboto">
            Nätverket Ingen Människa är Illegal består av lokalgrupper.
            Lokalgrupperna är självständiga och organiserar sig som de vill inom
            ramen för{" "}
            <a
              className="text-ocean-light hover:text-ocean-medium underline transition-colors"
              href="/plattform"
            >
              Ingen människa är illegals plattform
            </a>
            . Gruppernas verksamhet kan skilja sig lite åt men består av att
            arbeta praktiskt och politiskt för papperslösas rättigheter.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            Nätverkets arbete har många sidor och alla som, utifrån nätverkets
            programförklaring, vill ta del i det arbetet är mer än välkomna! Det
            finns ingen central grupp som tar beslut utan det är upp till alla
            lokalgrupper och individer att ta initiativ och genomföra projekt.{" "}
          </p>

          <h2 className="text-2xl mt-10 mb-2 font-black">
            Ingen Människa är Illegal får pris
          </h2>
          <ul className="list-disc ml-8 text-xl font-light font-roboto">
            <li>
              2001 mottog Ingen Människa är Illegal pris från Eva X Mobergs
              Minnesfond för visat kurage.
            </li>
            <li>2004 erhöll nätverket Miljöpartiets mångfaldspris.</li>
            <li>
              2005 mottog nätverket Ordfronts demokratipris tillsammans med
              Flyktinggruppernas och asylkommittéernas riksråd.
            </li>
            <li>
              År 2007 utsågs nätverket till årets Blatte de luxe i kategorin
              samhälle.
            </li>
            <li>
              2012 delade Roskildefestiveln ut sitt framröstade publikpris till
              nätverket tillsammans med Flyktinggruppernas och asylkommittéernas
              riksråd.
            </li>
            <li>
              2013 mottog nätverket Stig Dagerman-priset med motiveringen{" "}
              <span className="italic">
                ”Det låter som en rad i en dagsvers av Stig Dagerman. Det borde
                ropas ut över världen varje dag: Ingen människa är illegal!
                Nätverket Ingen människa är illegal (IMÄI) får årets
                Dagermanpris för att de verkställer budskapet i handling.”
              </span>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
