import React, { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { Modal } from "./modal";

export function Header({ appearance }: { appearance: "light" | "dark" }) {
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

  const fill = appearance === "light" ? "fill-carbon" : "fill-white";
  const textColor = appearance === "light" ? "text-carbon" : "text-white";

  return (
    <>
      <header className="p-4 md:p-8 flex items-center justify-between absolute top-0 inset-x-0">
        <Link
          href="https://www.ingenillegal.org/"
          className="h-14 md:h-24 w-auto"
        >
          <Logo appearance={appearance === "light" ? "dark" : "light"} />
        </Link>
        <div className="text-right">
          <a
            href="#"
            onClick={(e) => {
              setMenuState("menu");
              e.preventDefault();
            }}
            className={`block sm:inline no-underline font-medium text-base uppercase ${textColor} hover:text-ocean-light ${fill} hover:fill-ocean-light transition-colors mb-2 sm:mb-0 sm:mr-8`}
            aria-label="Menu"
          >
            <span className="font-mono">Meny&nbsp;</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 27"
              className="inline align-middle overflow-hidden w-8"
            >
              <path d="M6 7.5h17v2H6zm0 8h17v2H6zm0-4h17v2H6z"></path>
              <path d="M26.08 1H2.92A1.91 1.91 0 0 0 1 2.9v19.2A2.06 2.06 0 0 0 2.92 24h23.16A1.91 1.91 0 0 0 28 22.1V2.9A1.91 1.91 0 0 0 26.08 1zm.52 21.1a.51.51 0 0 1-.52.5H2.92c-.21 0-.51-.35-.52-.5V2.9a.51.51 0 0 1 .52-.5h23.16a.51.51 0 0 1 .52.5z"></path>
            </svg>
          </a>
          <a
            href="#"
            className={`block sm:inline no-underline font-medium text-base uppercase ${textColor} hover:text-ocean-light ${fill} hover:fill-ocean-light transition-colors`}
            id="lang-toggle"
            onClick={(e) => {
              setMenuState("language");
              e.preventDefault();
            }}
            aria-label="Lang"
          >
            <span className="font-mono">Språk&nbsp;</span>
            <svg
              className="inline align-middle overflow-hidden w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 27"
            >
              <path d="M8.49 5.4L4.86 15H6.6l.77-2.23h3.72l.79 2.23h1.74L10 5.4zm-.65 6l1.39-4 1.39 4zM20 6.17h-1.64v1.67h-4.14v1.62h6.58a16.14 16.14 0 0 1-1.92 2.64 10.68 10.68 0 0 1-1.35-1.77l-1.44.84a21 21 0 0 0 1.66 2.12 22.08 22.08 0 0 1-2.61 2.22l.94 1.41A22.13 22.13 0 0 0 19 14.49a30.38 30.38 0 0 0 3.52 2.45l.78-1.45a17.37 17.37 0 0 1-3.19-2.2 21.77 21.77 0 0 0 2.6-3.83h1.44V7.84H20z"></path>
              <path d="M26.08 1H2.92A1.91 1.91 0 0 0 1 2.89v23.64L10.31 21h15.77A1.91 1.91 0 0 0 28 19.11V2.89A1.91 1.91 0 0 0 26.08 1zm.52 18.11a.5.5 0 0 1-.52.49H9.93L2.4 24.07V2.89a.5.5 0 0 1 .52-.49h23.16a.5.5 0 0 1 .52.49z"></path>
            </svg>
          </a>
        </div>
      </header>
      <Modal
        visible={menuState === "menu"}
        onClose={() => setMenuState("none")}
      >
        <div className="flex justify-evenly items-center flex-col sm:flex-row">
          <ul className="font-roboto text-2xl font-bold text-center sm:text-left">
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
          <ul className="font-mono text-center sm:text-left mt-4 sm:mt-0">
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
        </div>
      </Modal>
      <Modal
        visible={menuState === "language"}
        onClose={() => setMenuState("none")}
      >
        <div className="flex justify-evenly items-center">
          <ul className="font-mono text-center">
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
        </div>
      </Modal>
    </>
  );
}
