"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import Local from "@/components/local";
import Image from "next/image";
import noNations from "../../../public/imai_no-borders-no-nations.jpg";
import uppsala from "../../../public/uppsala-fika.jpg";
import React from "react";

export default function Page() {
  return (
    <>
      <Header appearance="dark" />
      <main>
        <Hero
          appearance="light"
          title="English"
          subtitle="Welcome to a website for those who believe that all peoples should be free to roam the world and live wherever they please."
        />
        <Image
          className="mx-auto mb-8 px-4 md:max-w-[75%] lg:max-w-[720px]"
          src={noNations}
          alt="Building with the text 'No borders no nations'"
        />
        <section className="mx-auto mb-24 px-4 md:max-w-[75%] lg:max-w-[720px] lg:px-16">
          <p className="my-4 text-xl font-light font-roboto">
            <span className="font-bold">The No One is Illegal Network</span>{" "}
            <span className="italic">
              (Ingen människa är illegal in Swedish)
            </span>{" "}
            works to provide practical support to peolpe who are forced to live
            undocumented after having had their applicatsions for asylum
            refused. We demand permanent right of residence for all people who
            have arrived in Sweden and wish to remain. We believe in a world
            without borders, a world where no one is illegal.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            The No One is Illegal Network consists of local groups. The local
            groups are autonomous and organize themselves as they wish according
            to our manifesto. Activities of the groups may differ a bit but are
            all related to working practically and politically for the rights of
            undocumented migrants.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            Much work remains to realize everyone’s right to settle anywhere in
            the world. You can do a lot that is neither hard or difficult. No
            One is Illegal’s local groups need help with everything from
            bringing leftover food, accompany someone to the doctor or organize
            support parties to stop deportations and mobilize for demonstrations
            and campaigns.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            Can you help with something, or do you need help? Contact your
            nearest group!
          </p>
        </section>

        <Local appearance="transparent" />

        <section className="mx-auto mb-24 px-4 md:max-w-[75%] lg:max-w-[720px] lg:px-16">
          <p className="my-4 text-xl font-light font-roboto">
            The network has an open e-mail list for those who are or want to
            become a part of movement for asylum seekers and, for example, want
            to discuss how we create a world without borders where all have the
            same social, political and economic rights and obligations.
          </p>
          <h3 className="text-xl mt-10 mb-2 italic font-light">
            Information about other countries
          </h3>
          <ul>
            <li>
              <a
                className="text-ocean-light hover:text-ocean-medium underline transition-colors"
                href="https://w2eu.info/"
              >
                Independent information for refugees and migrants coming to
                Europe
              </a>
            </li>
          </ul>

          <h2 className="text-2xl mt-10 mb-2 font-black">Activities</h2>
          <p className="my-4 text-xl font-light font-roboto">
            The network No one is illegal works practically and politically with
            refugees´ and migrants’ rights.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            Our practical work is to support people who choose to live
            underground/hidden after having been rejected their application for
            asylum. This support may be to accompany someone to the doctor, to
            arrange a place in school for children, to write a new application
            for asylum, or just to be there as a supporting person when needed.
            Our work also consists of get left over food to give to the
            migrants, to assist with legal help and to organize solidarity
            parties to get money for food and rent.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            No one is illegal work politically with lifting the issue of asylum
            seekers and undocumented migrants´ rights. We do lectures at schools
            and other places on the migrants´ situation and on our work. We are
            involved in blockades when deportations are to be done and we work
            in campaigns and networks working for migrants´ rights, such as
            Flyktinggruppernas and asylkommitéernas riksråd (FARR),
            Flyktingamnesti 2005 and Asylrörelsen 2008.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            The network’s work has many aspects and all who, on the basis of
            network’s manifesto, would like to take part in this work are more
            than welcome!
          </p>
        </section>

        <Image
          className="mx-auto mb-8 px-4 md:max-w-[75%] lg:max-w-[720px]"
          src={uppsala}
          alt="Fika and a sign that says 'Ingen människa är illegal'"
        />

        <section className="mx-auto mb-24 px-4 md:max-w-[75%] lg:max-w-[720px] lg:px-16">
          <h2 className="text-2xl mt-10 mb-2 font-black">Manifesto</h2>
          <p className="my-4 text-xl font-light font-roboto">
            The earth belongs to all of us. We each have the right to free
            movement across its lands and to settle wherever we please.
            According to the principle ”From each according to his ability, to
            each according to her need”, we are entitled to equal access to the
            worlds land and resources once we do so with with care and respect
            in mind.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            The No one is illegal network does not accept the legitimacy of
            national borders and merely acknowledges them as political
            constructions to which neither moral justification or an interest in
            their upholding exists. A person born in one place has no more claim
            on it than anyone else. It is not sufficient however that these
            ideas remain as visions. An attempt must be made at their
            realisation.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            We do not recognise any countries, organizations or individuals
            entitlement to in any way restrict free movement of people across
            borders or to label them ”illegal” migration. The right to freedom
            of movement is to us inseparable from the right to participate in
            society under equal conditions. Until borders have been abolished,
            we therefore also work for universal social, political and economic
            rights and conditions for all people, with or without papers.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            We oppose all political attempts to use immigration as a tool for
            the undermining of wage levels and social safety nets within a
            state’s borders, for example, the forcing of recently immigrated
            people to work in conditions worse than those of the rest of the
            population.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            The No one is Illegal network claim the right and responsibility of
            all people to actively participate in the construction of a just
            society. Real democracy and radical change can only be built from
            below. Our network therefore operates outside the parlimentary
            process. We strive to make decisions and take action in our own
            names and not in anyone elses and to avoid any of us assuming
            authority over anyone else in the network.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            It is fundamental for our work that we pay attention to and counter
            the effects of the different power structures based on sex, class,
            sexuality, ethnicity and functionality that already exist in
            society. We see ourselves as a part of the global movement has been
            fighting for a long time for freedom, solidarity and an equal
            distribution of world resources – against all forms of authority.
          </p>
          <p className="my-4 text-xl font-light font-roboto">
            No one is free until we are all free!
          </p>
          <h3 className="text-xl mt-10 mb-2 font-bold">
            The No one is illegal network fight for these ideas by:
          </h3>
          <ul className="list-disc ml-8 text-xl font-light font-roboto">
            <li>
              Supporting people who are applying for a residency permit in
              Sweden or people who have been forced by Swedish immigration
              policy/authorities to live underground. Working for permanent
              residency permits for all people who are already here and wish to
              stay.
            </li>
            <li>
              Struggle for the right of everyone to enter and stay in the EU.
              Work for a change of EU politics that systematically exclude
              certain peoples.
            </li>
            <li>
              Disseminating information to the general pubic on the true nature
              of Swedish and European migration policies. Exposing the lethal
              fences that have been and are being constructed around the EU’s
              external frontier to shut out refugees and other migrants.
              Publisicing stories of refugees and other migrants. Breaking the
              myth that a humane refugee policy exists.
            </li>
            <li>
              Giving political answers to the the question of why people are
              forced to flee their home countries. Initiating a deeper
              discussion about migration on the basis of a global solidarity
              vision. Showing that these issues cannot be separated from
              discussions about the global economy, working and living
              conditions, injustice, racism and oppression.
            </li>
            <li>
              Cooperating with other groups fighting for the rights of refugees
              and other migrants and for open borders all around the world.
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
