import { Header } from "../components/header";
import Hero from "../components/hero";
import React from "react";
import { Footer } from "../components/footer";

export default function GeEttBidrag() {
  const files: [string, string, string][] = [
    ["Julgåva kort (A4)", "Ladda ner kort", "/julgava-imai-sverige-2.pdf"],
    [
      "Julgåva vikbart kort (A6)",
      "Ladda ner kort",
      "/julgava-kort-imai-sverige-2.pdf",
    ],
  ];

  return (
    <>
      <Header appearance="light" />
      <main>
        <Hero
          appearance="dark"
          title="Ge ett bidrag"
          subtitle="Alla pengar som Ingen Människa är Illegal får in går oavkortat till stöd för gömda. Vi är ständigt i behov av ekonomiska bidrag för hyror, mat, kläder, spårvagnskort etc."
          bg="/imai_uppsala_demonstration_2011-03-20.jpg"
        />
        <section className="mx-auto my-24 max-w-[650px]">
          <h2 className="text-2xl mt-10 mb-2 font-black">Bli månadsgivare</h2>
          <p className="mb-4 text-xl font-light font-roboto">
            Flera lokalgrupper har autogiro, genom vilket du varje månad kan ge
            ett stort eller litet bidrag. Det är enkelt och smidigt och du ger
            så mycket du vill utan att behöva tänka på det.
          </p>
          <p className="mb-4 text-xl font-light font-roboto">
            Vill du regelbundet skänka pengar till en lokalgrupp som inte har
            autogiro går det också jättebra. Då ställer du själv in ditt
            bankkonto att månadsvis göra en betalning till deras PostGiro eller
            Bankgiro numret.
          </p>
          <p className="mb-4 text-xl font-light font-roboto">
            Naturligtvis kan du även ge enstaka summor, genom att föra över
            pengar till våra PostGiro, BankGiro eller Swish-nummer. Du hittar
            all information om hur du skänker pengar på respektiva lokalgrupps
            sida.{" "}
          </p>

          <h2 className="text-2xl mt-10 mb-2 font-black">Gåvobevis</h2>
          <p className="mb-4 text-xl font-light font-roboto">
            Här hittar du gåvobevis som du själv kan skriva ut och ge bort ifall
            du vill donera till Ingen Människa är Illegal i någons namn:
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

          <h2 className="text-2xl mt-10 mb-2 font-black">Merchandise</h2>
          <p className="mb-4 text-xl font-light font-roboto">
            Du kan köpa merch från ingen människa är illegal stockholm, alla
            pengar går till Nätverket ingen människa är illegal och arbetet med
            att stötta papperslösa personer.
          </p>
          <p className="mb-4 text-xl font-light font-roboto">
            Du hittar vår onlinebutik här:{" "}
            <a
              href="https://tictail.com/ingenillegalsthlm"
              className="text-ocean-light hover:text-ocean-medium transition-colors underline"
            >
              https://tictail.com/ingenillegalsthlm
            </a>
          </p>

          <h2 className="text-2xl mt-10 mb-2 font-black">
            Prenumeration hos Dotterbolaget
          </h2>
          <p className="mb-4 text-xl font-light font-roboto">
            Skapa stående överföring till IMÄI Stockholm och få överraskningar i
            brevlådan från seriekollektivet Dotterbolaget Sthlm. Du väljer själv
            hur mycket du vill betala. Allt du skänker (förutom en liten summa
            för porto- och tryckkostnader) går direkt till Ingen människa är
            illegal Stockholm.
          </p>
          <p className="mb-4 text-xl font-light font-roboto">
            Mejla namn, adress och hur mycket du vill bidra med till:{" "}
            <a
              href="mailto:dbprenumerationsthlm@gmail.com"
              className="text-ocean-light hover:text-ocean-medium transition-colors underline"
            >
              dbprenumerationsthlm@gmail.com
            </a>
          </p>

          <h2 className="text-2xl mt-10 mb-2 font-black">
            Bidrag med annat än pengar
          </h2>
          <p className="mb-4 text-xl font-light font-roboto">
            Har du ett rum ledigt? Ett kort på kollektivtrafiken som inte gått
            ut fast du ska åka från stan? Vet du något ställe där det går att
            hämta gratis mat? Har du kunskaper du vill dela med dig av? Kontakta
            lokalgruppen närmast dig för att förmedla information.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
