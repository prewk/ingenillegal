import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import Local from "../components/local";

export default function Home() {
  return (
    <>
      <Header appearance="light">
        <div>
          <div className="w-full px-[15px] mx-auto xs:max-w-[540px] md:max-w-[720px] 2md:max-w-[960px] xl:max-w-[1140px]">
            <div className="mt-4 mb-24 xs:mb-32 2md:mb-40 mx-auto">
              <h1 className="mt-0 mb-8 mx-auto w-full font-roboto text-center font-black text-2xl md:w-1/2 md:text-3xl 2md:text-5xl">
                Alla människor har rätt att röra sig fritt
              </h1>
              <p className="text-center my-0 mx-auto w-full font-mono text-lg md:w-[80%] md:text-xl 2md:text-1xl">
                Vi kräver permanent uppehållstillstånd åt alla som vill stanna i
                Sverige. För en värld utan nationsgränser, en värld där ingen
                människa är illegal.
              </p>
            </div>
          </div>
        </div>
      </Header>
      <main className="bg-ocean-light">
        <Local />
      </main>
      <Footer />
    </>
  );
}
