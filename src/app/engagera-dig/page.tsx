'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import React from "react";
import Local from "@/components/local";

export default function Page() {
  const files: [string, string, string][] = [
    ["IMäI:s logotyp (png)", "Ladda ner logotyp", "/imai_logo.png"],
    [
      "Folder om It-gruppen i Göteborg (2017)",
      "Ladda ner folder",
      "/it-gruppen-flyer-givare-2017.pdf",
    ],
  ];

  return (
    <>
      <Header appearance="light" />
      <main>
        <Hero
          appearance="dark"
          title="Engagera dig"
          subtitle="IMäI består av sina medlemmars engagemang. Det finns många sätt att engagera sig, och här listar vi några."
          bg="/imai_banner.jpg"
        />
        <section className="mx-auto my-24 max-w-[650px]">
          <p className="mb-4 text-xl font-light font-roboto">
            Mycket finns kvar att göra för att förverkliga alla människors rätt
            att bosätta sig var som helst i världen. Du kan göra mycket som
            varken behöver vara jobbigt eller svårt. Imäi:s lokalgrupper behöver
            hjälp med allt från att hämta överbliven mat, följa med någon till
            läkaren eller fixa stödfester till att stoppa deportationer och
            mobilisera inför demonstrationer och kampanjer.
          </p>

          <h2 className="text-2xl mt-10 mb-2 font-black">
            Engagera dig i en lokalgrupp
          </h2>
          <p className="mb-4 text-xl font-light font-roboto">
            Imäi:s praktiska arbete sker lokalt. Ta en titt på respektive
            lokalgrupps egna del av hemsidan för att se vilka arbetsgrupper som
            finns och vad som är på gång. Ta kontakt med din lokalgrupp eller
            kom på ett öppet möte för att se hur det är att vara aktiv i Ingen
            människa är illegal.
          </p>
          <p className="mb-4 text-xl font-light font-roboto">
            Finns det ingen lokalgrupp nära dig går det bra att starta en.
            Kontakta någon redan existerande grupp för att få veta hur du/ni
            kommer igång i kampen för en mer rättvis och mänsklig
            migrationspolitik.
          </p>
        </section>
        <section className="mx-auto max-w-[800px]">
          <Local appearance="transparent" />
        </section>
        <section className="mx-auto my-24 max-w-[650px]">
          <h2 className="text-2xl mt-10 mb-2 font-black">
            Häng med när det händer något!
          </h2>
          <p className="mb-4 text-xl font-light font-roboto">
            Ingen människa är illegal annordnar manifestationer för att
            uppmärksamma papperslösas situation, sätter sig i vägen vid
            avvisningar och demonstrerar för alla människors lika rättigheter.
          </p>

          <h2 className="text-2xl mt-10 mb-2 font-black">
            Bli vän med Ingen Människa på sociala medier
          </h2>
          <p className="mb-4 text-xl font-light font-roboto">
            Ju fler vi är, desto starkare röst har vi. Ansvariga politiker och
            myndigheter behöver veta att de agerar omänskligt när de tar
            avvisningsbeslut efter avvisningsbeslut. Papperslösa som lever i
            Sverige behöver veta att vi är många som står på deras sida.
          </p>
          <p className="mb-4 text-xl font-light font-roboto">
            Du hittar våra lokalgruppers sociala medier-sidor under respektive
            lokalgrupp.
          </p>

          <h2 className="text-2xl mt-10 mb-2 font-black">
            Skriv brev till ansvariga politiker
          </h2>
          <p className="mb-4 text-xl font-light font-roboto">
            Skriv till ansvariga politiker och myndigheter.
          </p>
          <p className="mb-4 text-xl font-light font-roboto">
            Migrationsminister{" "}
            <a
              href="https://www.regeringen.se/sveriges-regering/justitiedepartementet/morgan-johansson/"
              className="underline text-ocean-light hover:text-ocean-medium"
            >
              Morgan Johansson
            </a>{" "}
            och alla de på{" "}
            <a
              href="http://www.migrationsverket.se/info/kontakt.html"
              className="underline text-ocean-light hover:text-ocean-medium"
            >
              Migrationsverket
            </a>{" "}
            som fattar beslut om migranters avvisningar behöver få veta att de
            inte har stöd från folket.
          </p>

          <h2 className="text-2xl mt-10 mb-2 font-black">
            Sprid info om Ingen Människa är Illegal
          </h2>
          <p className="mb-4 text-xl font-light font-roboto">
            Ladda hem foldrar och annat material om Ingen Människa är Illegal
            och/eller Sveriges flyktingpolitik och sprid på ditt jobb, skola
            osv.
          </p>
          <ul>
            {files.map(([label, button, link], i) => (
              <li className="my-4" key={i}>
                <a href={link} download>
                  <span className="text-ocean-light hover:text-ocean-medium transition-colors underline">
                    {label}
                  </span>
                  <span className="ml-2 rounded-2xl bg-carbon hover:bg-carbon/80 transition-colors text-white text-xs px-4 py-2">
                    {button}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mb-4 text-xl font-light font-roboto">
            Vill du att någon från Ingen Människa är Illegal kommer och
            föreläser på din skola? Kontakta närmaste lokalgrupp.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
