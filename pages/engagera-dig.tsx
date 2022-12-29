import Header from "../components/old/header";
import React from "react";
import Local from "../components/old/local";
import Footer from "../components/old/footer";

export default function EngageraDig() {
  return (
    <>
      <Header appearance="dark">
        <div className="mt-4 mx-auto mb-0 pb-12 md:pb-20 2md:pb-40">
          <h1 className="mt-0 mb-8 mx-auto w-full font-roboto text-center font-black text-2xl md:w-1/2 md:text-3xl 2md:text-5xl">
            Engagera dig
          </h1>
          <p className="text-center my-0 mx-auto w-full font-mono text-lg md:w-[80%] md:text-xl 2md:text-1xl">
            IMäI består av sina medlemmars engagemang. Det finns många sätt att
            engagera sig, och här listar vi några.
          </p>
        </div>
      </Header>
      <main className="w-full px-[15px] mx-auto xs:max-w-[540px] md:max-w-[720px] 2md:max-w-[960px]">
        <div className="mx-[-15px] flex flex-wrap">
          <div className="relative w-full px-[15px] max-w-full flex-grow basis-0">
            <div className="mt-8 mb-16 mx-auto md:my-16 2md:my-24 2md:w-[70%]">
              <p className="font-roboto font-light text-xl my-4">
                Mycket finns kvar att göra för att förverkliga alla människors
                rätt att bosätta sig var som helst i världen. Du kan göra mycket
                som varken behöver vara jobbigt eller svårt. Imäi's lokalgrupper
                behöver hjälp med allt från att hämta överbliven mat, följa med
                någon till läkaren eller fixa stödfester till att stoppa
                deportationer och mobilisera inför demonstrationer och
                kampanjer.
              </p>
              <h2 className="mt-12 mx-0 mb-4 font-roboto font-bold text-2xl">
                Engagera dig i en lokalgrupp
              </h2>
              <p className="font-roboto font-light text-xl my-4">
                Imäi:s praktiska arbete sker lokalt. Ta en titt på respektive
                lokalgrupps egna del av hemsidan för att se vilka arbetsgrupper
                som finns och vad som är på gång. Ta kontakt med din lokalgrupp
                eller kom på ett öppet möte för att se hur det är att vara aktiv
                i Ingen människa är illegal.
              </p>
              <p className="font-roboto font-light text-xl my-4">
                Finns det ingen lokalgrupp nära dig går det bra att starta en.
                Kontakta någon redan existerande grupp för att få veta hur du/ni
                kommer igång i kampen för en mer rättvis och mänsklig
                migrationspolitik.
              </p>
              <div className="pt-20">
                <Local />
              </div>
              <h2 className="mt-12 mx-0 mb-4 font-roboto font-bold text-2xl">
                Häng med när det händer något!
              </h2>
              <p className="font-roboto font-light text-xl my-4">
                Ingen människa är illegal annordnar manifestationer för att
                uppmärksamma papperslösas situation, sätter sig i vägen vid
                avvisningar och demonstrerar för alla människors lika
                rättigheter.
              </p>
              <h2 className="mt-12 mx-0 mb-4 font-roboto font-bold text-2xl">
                Bli vän med Ingen Människa är Illegal på sociala medier
              </h2>
              <p className="font-roboto font-light text-xl my-4">
                Ju fler vi är, desto starkare röst har vi. Ansvariga politiker
                och myndigheter behöver veta att de agerar omänskligt när de tar
                avvisningsbeslut efter avvisningsbeslut. Papperslösa som lever i
                Sverige behöver veta att vi är många som står på deras sida.
              </p>
              <p className="font-roboto font-light text-xl my-4">
                Du hittar våra lokalgruppers sociala medier-sidor under
                respektive lokalgrupp.
              </p>
              <h2 className="mt-12 mx-0 mb-4 font-roboto font-bold text-2xl">
                Skriv brev till ansvariga politiker
              </h2>
              <p className="font-roboto font-light text-xl my-4">
                Skriv till ansvariga politiker och myndigheter.
                Migrationsminister Tobias Billström och alla de på{" "}
                <a
                  href="http://www.migrationsverket.se/info/kontakt.html"
                  className="text-ocean-light active:text-ocean-light underline"
                >
                  Migrationsverket
                </a>{" "}
                som fattar beslut om migranters avvisningar behöver få veta att
                de inte har stöd från folket.
              </p>
              <h2 className="mt-12 mx-0 mb-4 font-roboto font-bold text-2xl">
                Sprid info om Ingen Människa är Illegal
              </h2>
              <p className="font-roboto font-light text-xl my-4">
                Ladda hem foldrar och annat material om Ingen Människa är
                Illegal och/eller Sveriges flyktingpolitik och sprid på ditt
                jobb, skola osv.
              </p>
              <ul>
                <li className="mb-6">
                  <a
                    href="/imai_logo.png"
                    className="text-ocean-light active:text-ocean-light underline text-base"
                  >
                    IMäI:s logotyp (png)
                  </a>
                  <a
                    href="/imai_logo.png"
                    className="bg-carbon text-white rounded-[2em] ml-3 py-2 px-[2em] text-xs"
                  >
                    Ladda ner logotyp
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="#"
                    className="text-ocean-light active:text-ocean-light underline text-base"
                  >
                    Folder om IMäI Göteborg (2015)
                  </a>
                  <a
                    href="#"
                    className="bg-carbon text-white rounded-[2em] ml-3 py-2 px-[2em] text-xs"
                  >
                    Ladda ner folder
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="/it-gruppen-flyer-givare-2017.pdf"
                    className="text-ocean-light active:text-ocean-light underline text-base"
                  >
                    Folder om It-gruppen i Göteborg (2017)
                  </a>
                  <a
                    href="/it-gruppen-flyer-givare-2017.pdf"
                    className="bg-carbon text-white rounded-[2em] ml-3 py-2 px-[2em] text-xs"
                  >
                    Ladda ner folder
                  </a>
                </li>
              </ul>
              <p className="font-roboto font-light text-xl my-4">
                Vill du att någon från Ingen Människa är Illegal kommer och
                föreläser på din skola? Kontakta närmaste lokalgrupp.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
