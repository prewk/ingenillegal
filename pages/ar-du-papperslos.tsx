import Header from "../components/old/header";
import React from "react";
import Local from "../components/old/local";
import Footer from "../components/old/footer";

export default function ArDuPapperslos() {
  return (
    <>
      <Header appearance="dark">
        <div className="mt-4 mx-auto mb-0 pb-12 md:pb-20 2md:pb-40">
          <h1 className="mt-0 mb-8 mx-auto w-full font-roboto text-center font-black text-2xl md:w-1/2 md:text-3xl 2md:text-5xl">
            Är du papperslös?
          </h1>
          <p className="text-center my-0 mx-auto w-full font-mono text-lg md:w-[80%] md:text-xl 2md:text-1xl">
            Nätverket Ingen människa är illegal arbetar med att praktiskt stödja
            människor utan uppehållstillstånd.
          </p>
        </div>
      </Header>
      <main className="w-full px-[15px] mx-auto xs:max-w-[540px] md:max-w-[720px] 2md:max-w-[960px]">
        <div className="mx-[-15px] flex flex-wrap">
          <div className="relative w-full px-[15px] max-w-full flex-grow basis-0">
            <div className="mt-8 mb-16 mx-auto md:my-16 2md:my-24 2md:w-[70%]">
              <p className="font-roboto font-light text-xl my-4">
                Vi har inga anställda eller särskild utbildning för detta. Vi
                tror på en värld utan nationsgränser, en värld där ingen
                människa är illegal. Tillsammans gör vi en annan värld möjlig.
              </p>
              <p className="font-roboto font-light text-xl my-4">
                I länkarna längst ner på sidan hittar du information på olika
                språk om rättigheter till vård, skola, tandvård och boken Goda
                råd - om asylprocessen i Sverige. Samt kontaktuppgifter till
                gratis juridisk rådgivning.
              </p>
              <h3 className="font-robot font-bold text-0xl mt-10">
                Kontakta oss
              </h3>
              <p className="font-roboto font-light text-xl my-4">
                Ta kontakt med den grupp som är närmast dig. Kontaktuppgifter
                hittar du på lokalgruppens sida. Olika lokalgrupper kan hjälpa
                till med olika saker, se under lokalgruppernas egna flikar.
                <span className="italic">
                  Skicka inga känsliga uppgifter (till exempel namn eller
                  adresser) på mail och var försiktig även över telefon.
                </span>
              </p>
              <div className="pt-20">
                <Local />
              </div>
              <h2 className="mt-12 mx-0 mb-4 font-roboto font-bold text-2xl">
                Länkar
              </h2>
              <ul>
                <li className="my-4">
                  <p className="font-roboto font-light text-xl">
                    Flyktinggruppernas riksråd
                  </p>
                  <p className="font-roboto font-light text-xl">
                    <a
                      href="https://www.farr.se"
                      className="text-ocean-light visited:text-ocean-light underline"
                    >
                      www.farr.se
                    </a>
                  </p>
                </li>
                <li className="my-4">
                  <p className="font-roboto font-light text-xl">
                    Goda råd - Asylprocessen
                  </p>
                  <p className="font-roboto font-light text-xl">
                    <a
                      href="https://www.farr.se/sv/att-soeka-asyl/rad-till-asylsoekande"
                      className="text-ocean-light visited:text-ocean-light underline"
                    >
                      www.farr.se/sv/att-soeka-asyl/rad-till-asylsoekande
                    </a>
                  </p>
                </li>
                <li className="my-4">
                  <p className="font-roboto font-light text-xl">
                    Att söka asyl
                  </p>
                  <p className="font-roboto font-light text-xl">
                    <a
                      href="https://www.farr.se/sv/att-soeka-asyl"
                      className="text-ocean-light visited:text-ocean-light underline"
                    >
                      www.farr.se/sv/att-soeka-asyl
                    </a>
                  </p>
                </li>
                <li className="my-4">
                  <p className="font-roboto font-light text-xl">
                    Rätt till vård/tandvård
                  </p>
                  <p className="font-roboto font-light text-xl">
                    <a
                      href="https://www.farr.se/sv/att-soeka-asyl/vard-och-lakarintyg/1080-ratt-till-vard-for-asylsokande-och-papperslosa"
                      className="text-ocean-light visited:text-ocean-light underline"
                    >
                      www.farr.se/sv/att-soeka-asyl/vard-och-lakarintyg/1080-ratt-till-vard-for-asylsokande-och-papperslosa
                    </a>
                  </p>
                </li>
                <li className="my-4">
                  <p className="font-roboto font-light text-xl">
                    Tips till skolpersonal
                  </p>
                  <p className="font-roboto font-light text-xl">
                    <a
                      href="https://www.farr.se/sv/att-soeka-asyl/tips-till-skolpersonal"
                      className="text-ocean-light visited:text-ocean-light underline"
                    >
                      www.farr.se/sv/att-soeka-asyl/tips-till-skolpersonal
                    </a>
                  </p>
                </li>
                <li className="my-4">
                  <p className="font-roboto font-light text-xl">
                    Länkar till andra organisationer
                  </p>
                  <p className="font-roboto font-light text-xl">
                    <a
                      href="https://www.farr.se/sv/att-soeka-asyl/lankar"
                      className="text-ocean-light visited:text-ocean-light underline"
                    >
                      www.farr.se/sv/att-soeka-asyl/lankar
                    </a>
                  </p>
                </li>
                <li className="my-4">
                  <p className="font-roboto font-light text-xl">
                    Svenska Röda Korset
                  </p>
                  <p className="font-roboto font-light text-xl">
                    <a
                      href="https://www.redcross.se"
                      className="text-ocean-light visited:text-ocean-light underline"
                    >
                      www.redcross.se
                    </a>
                  </p>
                </li>
                <li className="my-4">
                  <p className="font-roboto font-light text-xl">
                    Om rättigheter till skola och vård
                  </p>
                  <p className="font-roboto font-light text-xl">
                    <a
                      href="https://www.redcross.se/behover-du-var-hjalp/vard-och-behandling/roda-korsets-vardformedling"
                      className="text-ocean-light visited:text-ocean-light underline"
                    >
                      https://www.redcross.se/behover-du-var-hjalp/vard-och-behandling/roda-korsets-vardformedling
                    </a>
                  </p>
                </li>
                <li className="my-4">
                  <p className="font-roboto font-light text-xl">
                    Behandlingscenter för krigsskadade och torterade
                  </p>
                  <p className="font-roboto font-light text-xl">
                    <a
                      href="https://www.redcross.se/kontakt/behandlingscenter"
                      className="text-ocean-light visited:text-ocean-light underline"
                    >
                      www.redcross.se/kontakt/behandlingscenter
                    </a>
                  </p>
                </li>
                <li className="my-4">
                  <p className="font-roboto font-light text-xl">
                    Rådgivningsbyrån för asylsökande och flyktingar - Gratis
                    juridisk rådgivning
                  </p>
                  <p className="font-roboto font-light text-xl">
                    <a
                      href="https://sweref.org/vilket-stod-kan-du-fa"
                      className="text-ocean-light visited:text-ocean-light underline"
                    >
                      sweref.org/vilket-stod-kan-du-fa
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
