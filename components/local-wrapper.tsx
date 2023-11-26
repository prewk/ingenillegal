import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export function LocalWrapper({
  title,
  titleLink,
  socials,
  links,
  children,
}: {
  title: string;
  titleLink: string;
  socials: [string, string][];
  links: [string, string][];
  children: React.ReactNode;
}) {
  return (
    <>
      <Header appearance="dark" />
      <div className="flex flex-col lg:flex-row max-w-[1000px] mx-auto mb-16">
        <ul className="min-w-[320px] font-mono mx-0 px-8 list-none">
          <li className="mb-4">
            <a
              href={titleLink}
              className="text-black hover:text-black no-underline hover:underline"
            >
              <h1 className="px-0 text-4xl">{title}</h1>
            </a>
          </li>
          {socials.map(([label, link], i) => (
            <li key={link} className={i === socials.length - 1 ? "mb-4" : ""}>
              <a
                href={link}
                className="block hover:text-white no-underline bg-ocean-light hover:bg-ocean-medium text-white text-xl px-4 py-2 my-2"
              >
                {label}
              </a>
            </li>
          ))}
          {links.map(([label, link]) => (
            <li key={link}>
              <a
                href={link}
                className="block uppercase no-underline hover:underline text-black hover:text-black font-medium text-xl py-2"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <main className="local-main">{children}</main>
      </div>
      <Footer />
    </>
  );
}
